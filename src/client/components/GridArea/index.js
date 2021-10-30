import React from 'react'
import { Square } from './Square'
import { Row } from './Row'
import { Grid } from '@material-ui/core'

export const GridArea = ({data}) => {
    const grid = data.map((rowData) => {
        const key = rowData[0].key.y
        return <Row key={key} rowData={rowData}/>
    })

    return (
        <>
            {grid}
        </>
    )
}
