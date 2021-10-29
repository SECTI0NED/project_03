import React from 'react'
import { Square } from './Square'
import { Grid } from '@material-ui/core'
export const GridArea = ({data}) => {
  
    const grid = data.map((row) => {
        return row.map((data => {return <Square />}))
    })

    return (
        <Grid container direction="row" justifyContent="center">
            {grid}
        </Grid>
    )
}
