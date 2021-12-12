import { Button, CssBaseline, Divider, Grid, TextField, Typography, Switch} from "@material-ui/core"
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab"
import { ThemeProvider } from '@material-ui/styles'
import React, { useContext } from 'react'
import { DroneContext } from '../../context/DroneContext'
import { useGlobalStyles } from '../../styles/Global'
import { theme } from "../../styles/Theme"
import { GridArea } from '../GridArea'
import { ValidInputPanel } from '../ValidInputPanel'
import { ErrorDialog } from './ErrorDialog'
import { useApp } from './hooks/useApp'

export const App = () => {
    // Styles
    const global = useGlobalStyles()
    const {setFirstPose, setSecondPose, setNumberOfDrones, numberOfDrones} = useContext(DroneContext)
    const {handleInputChange, handleSubmit, gridData, input, amountOfBillboards, 
        error, closeError, handleButtonInput, handleClear, toggleNumberOfDrones} = useApp(setFirstPose, setSecondPose, setNumberOfDrones, numberOfDrones)
   
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
                            <ToggleButtonGroup value={numberOfDrones} onChange={toggleNumberOfDrones} exclusive>
                                <ToggleButton value={1}>Single Drone</ToggleButton>
                                <ToggleButton value={2}>Two Drones</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
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
                        <Divider />
                        <Grid item>
                            <Grid container direction='row' alignItems='baseline' justifyContent='flex-end'>
                            <Typography style={{fontSize: 18, marginRight: 20}}>Number of billboards photographed at least once:</Typography>
                            <Typography style={{fontSize: 22}}>{amountOfBillboards}</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                </Grid>
            </div>
        </ThemeProvider>
       
    )
}
