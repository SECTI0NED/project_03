import React from 'react'
import { Square } from "./Square"

export const Row = ({gridData}) => {
    const row = gridData.map((cellData => {
        const key = cellData.key.x + cellData.key.y
        return <Square key={key} gridData={cellData} />
    }))
    return (
        <div style={{minWidth: 900, maxWidth: 900, display: "flex", justifyContent: "flex-start"}}>
            {row}
        </div>
    )
}
