import React, {useState} from 'react'
import { GridArea } from '../GridArea'
import {Divider, TextField} from "@material-ui/core"
import { Grid } from '@material-ui/core'
import { useGlobalStyles } from '../../styles/Global'


export const App = () => {
  const getGridData = () => {
    let grid = new Array(21)
    for(let i = 0; i < grid.length; i++){
        grid[i] = new Array(21)
    }

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            grid[row][col] = {key: {x: col, y: row}, item: ""}
        }
    }

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            console.log(grid[row][col].key)
        }
    }
    return grid
  }
    const [data, setData] = useState(getGridData)
    const [input, setInput] = useState("")

    const global = useGlobalStyles()

    return (
        <div style={{padding: 50}}> 
        <Grid container direction="row" justifyContent="flex-start">
            <Grid item style={{ padding: "0px 20px 20px 0px"}}>
            <GridArea data={data}/>
            </Grid>
            <Grid item>
                <TextField variant="filled" label="INPUT" style={{width: 700}}></TextField>
            </Grid>
        </Grid>
        </div>
    )
}
