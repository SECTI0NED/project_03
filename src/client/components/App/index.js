import React, {useState} from 'react'
import { GridArea } from '../GridArea'
import {CssBaseline, Divider, TextField} from "@material-ui/core"
import { Grid } from '@material-ui/core'
import { useGlobalStyles } from '../../styles/Global'
import {MAX_HEIGHT, MAX_WIDTH, ORIGIN_X, ORIGIN_Y} from "../../constants"
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import {theme} from "../../styles/Theme"

export const App = () => {
  const getGridData = () => {
        let grid = new Array(MAX_HEIGHT)
        for(let i = 0; i < grid.length; i++){
            grid[i] = new Array(MAX_WIDTH)
        }

        for(let row = 0; row < grid.length; row++){
            for(let col = 0; col < grid[row].length; col++){
                grid[row][col] = {key: {x: col, y: row}, item: ""}
            }
        }
        
        grid[ORIGIN_Y][ORIGIN_X].item = "s"
        return grid
    }
    const [data, setData] = useState(getGridData)
    const [input, setInput] = useState("")

    const global = useGlobalStyles()

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
                        <TextField variant="filled" label="INPUT" style={{width: 700}}/>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" >Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            </div>
        </ThemeProvider>
       
    )
}
