import React, {useEffect, useState} from 'react'
import { GridArea } from '../GridArea'
import {CssBaseline, Divider, TextField, Typography} from "@material-ui/core"
import { Grid } from '@material-ui/core'
import { useGlobalStyles } from '../../styles/Global'
import {MAX_HEIGHT, MAX_WIDTH, ORIGIN_X, ORIGIN_Y} from "../../constants"
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import {theme} from "../../styles/Theme"
import { getData } from '../../services'

export const App = () => {
    // Styles
    const global = useGlobalStyles()

    // Grid Data
    const initGridData = () => {
        let grid = new Array(MAX_HEIGHT)
        for(let i = 0; i < grid.length; i++){
            grid[i] = new Array(MAX_WIDTH)
        }

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[row].length; col++){
                grid[row][col] = {key: {x: col, y: row}, item: ""}
            }
        }
        // Set the starting point
        grid[ORIGIN_Y][ORIGIN_X].item = "s"
        return grid
    }
    const [data, setData] = useState(initGridData)
    const [amountOfBillboards, setAmountOfBillboards] = useState(0)

    // Handling Input
    const [input, setInput] = useState("")
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    // Handle submitting and receiving data
    const handleSubmit = async () => {
        if(!input) return
        try{
            console.log(input)
            const res = await getData(input)
            setData(res.data.grid)
            setAmountOfBillboards(res.data.amount)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{padding: 50}}> 
                <Grid container direction="row" justifyContent="flex-start">
                <Grid item style={{ padding: "0px 20px 20px 0px"}}>
                <GridArea data={data}/>
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
