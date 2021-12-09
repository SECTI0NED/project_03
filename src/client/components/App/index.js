import React, {useContext} from 'react'
import { GridArea } from '../GridArea'
import {CssBaseline, Divider, MenuItem, TextField, Typography} from "@material-ui/core"
import { Grid } from '@material-ui/core'
import { useGlobalStyles } from '../../styles/Global'
import { useApp } from './hooks/useApp'
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import {theme} from "../../styles/Theme"
import { ErrorDialog } from './ErrorDialog'
import { CurrentPoseContext } from '../../context/CurrentPoseContext'
import { Label } from '@material-ui/icons'
import { ValidInputPanel } from '../ValidInputPanel'

export const App = () => {
    // Styles
    const global = useGlobalStyles()
    const {setFirstPose} = useContext(CurrentPoseContext)
    const {handleInputChange, handleSubmit, gridData, input, amountOfBillboards, 
        error, closeError, handleButtonInput, handleClear} = useApp(setFirstPose)
   
    return (
        
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{padding: 50}}> 
                <ErrorDialog error={error} closeError={closeError}/>
                <Grid container direction="row" justifyContent="flex-start">
                <Grid item style={{ padding: "0px 20px 20px 0px"}}>
                <GridArea gridData={gridData}/>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={4} justifyContent="center">
                        <Grid item>
                            <ValidInputPanel handleButtonInput={handleButtonInput}/>
                        </Grid>
                        <Grid item>
                            <TextField 
                                variant="filled" 
                                label="INPUT" 
                                style={{width: 700}}
                                name="input"
                                value={input}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <Grid container direction="row" justifyContent='flex-end'>
                                <Button variant='outlined' style={{marginRight: 20}} onClick={handleClear}>Clear</Button>
                                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography>Number of billboards photographed at least once: {amountOfBillboards}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </div>
        </ThemeProvider>
       
    )
}
