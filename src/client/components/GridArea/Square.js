
import {ORIGIN_X, ORIGIN_Y, TAKE_PHOTO, PATH, START} from "../../constants"
import React from 'react'
import { useStyles } from "./styles"
import FlightIcon from '@material-ui/icons/Flight';
import { Tooltip } from "@material-ui/core";

export const Square = ({data}) => {
    const classes = useStyles()
    return (
        <Tooltip title={data.item !== START && data.item !== TAKE_PHOTO ?`(${data.key.x}, ${data.key.y})`: ""}>
        <div className={classes.square}>
            {
                data.item === PATH
                ?
                <div className={classes.path}>

                </div>
                :
                <></>
            }
            {
                data.item === TAKE_PHOTO
                ?
                <Tooltip title={`Photographed (${data.key.x}, ${data.key.y})`}>
                <div className={classes.photographed}>

                </div>
                </Tooltip>
                :
                <></>
            }
            {
                data.item === START
                ?
                <Tooltip title={`Start (${data.key.x}, ${data.key.y})`}>
                <div className={classes.start}>

                </div>
                </Tooltip>
                :
                <></>
            }
        </div>
        </Tooltip>
    )
}
