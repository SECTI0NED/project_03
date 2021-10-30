
import {ORIGIN_X, ORIGIN_Y, TAKE_PHOTO, PATH} from "../../constants"
import React from 'react'
import { useStyles } from "./styles"
export const Square = ({data}) => {
    const classes = useStyles()
    return (
        <div className={classes.square}>
            {
                data.item === PATH
                ?
                "o"
                :
                <></>
            }
            {
                data.item === TAKE_PHOTO
                ?
                "x"
                :
                <></>
            }
            {
                data.key.x === ORIGIN_X && data.key.y === ORIGIN_Y
                ?
                "s"
                :
                <></>
            }
        </div>
    )
}
