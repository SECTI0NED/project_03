import { Grid } from '@material-ui/core'
import {Square} from "./Square"
import React from 'react'
import { maxWidth } from '@material-ui/system'

export const Row = ({rowData}) => {
    const row = rowData.map((data => {
        const key = data.key.x + data.key.y
        return <Square key={key} data={data} />
    }))
    return (
        <div style={{minWidth: 900, maxWidth: 900, display: "flex", justifyContent: "flex-start"}}>
            {row}
        </div>
    )
}
