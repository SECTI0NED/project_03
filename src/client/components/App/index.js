import React, {useEffect, useState} from 'react'
import { GridArea } from '../GridArea'
import {CssBaseline, Divider, TextField, Typography} from "@material-ui/core"
import { Grid } from '@material-ui/core'
import { useGlobalStyles } from '../../styles/Global'
import { useApp } from './useApp'
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import {theme} from "../../styles/Theme"
import { ErrorDialog } from './ErrorDialog'

export const App = () => {
    // Styles
    const global = useGlobalStyles()

    const {handleInputChange, handleSubmit, data, input, amountOfBillboards, error, closeError, currentPos} = useApp()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{padding: 50}}> 
                <ErrorDialog error={error} closeError={closeError}/>
                <Grid container direction="row" justifyContent="flex-start">
                <Grid item style={{ padding: "0px 20px 20px 0px"}}>
                <GridArea data={data} currentPos={currentPos}/>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={4} justifyContent="center">
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
                            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
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
