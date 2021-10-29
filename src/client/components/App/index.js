import React, {useState} from 'react'
import { GridArea } from '../GridArea'
import {TextField} from "@material-ui/core"
import { Grid } from '@material-ui/core'


export const App = () => {
  const getGridData = () => {
    let grid = new Array(21)
    for(let i = 0; i < grid.length; i++){
        grid[i] = new Array(21)
    }
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            grid[row][col] = ""
        }
    }
    return grid
  }
    const [data, setData] = useState(getGridData)
    const [input, setInput] = useState("")

    return (
        <div>
            <Grid container direction="col" justifyContent="center" style={{width: 1000}}>
                <Grid item>
                <GridArea data={data}/>
                </Grid>
                <Grid item style={{width: "100%"}}>
                <TextField variant="filled" label="INPUT" style={{width: "100%"}}></TextField>
                </Grid>
            </Grid>
        </div>
    )
}
