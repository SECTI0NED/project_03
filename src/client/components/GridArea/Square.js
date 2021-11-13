
import {ORIGIN_X, ORIGIN_Y, TAKE_PHOTO, PATH, START} from "../../constants"
import React, {useContext} from 'react'
import { useStyles } from "./styles"
import FlightIcon from '@material-ui/icons/Flight';
import { Tooltip } from "@material-ui/core";
import { CurrentPositionContext } from "../../context/CurrentPositionContext";

export const Square = ({data}) => {
    const {position} = useContext(CurrentPositionContext)
    const classes = useStyles()
    return (
        <>
        {/* {console.log(position, data.key)} */}
        <Tooltip title={data.item !== START && data.item !== TAKE_PHOTO ?`(${data.key.x}, ${data.key.y})`: ""}>
        <div className={classes.square}>
            {
                data.item === PATH
                ?
                <div className={classes.path}>
                    {
                        data.key.x === position.x && data.key.y === position.y
                        ?
                        <FlightIcon style={{ fontSize: 38, textAlign: "center" }}/>
                        :
                        <></>
                    }
                </div>
                :
                <></>
            }
            {
                data.item === TAKE_PHOTO
                ?
                <Tooltip title={`Photographed (${data.key.x}, ${data.key.y})`}>
                <div className={classes.photographed}>
                    {
                        data.key.x === position.x && data.key.y === position.y
                        ?
                        <FlightIcon style={{ fontSize: 38, textAlign: "center" }}/>
                        :
                        <></>
                    }
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
                    {
                        data.key.x === position.x && data.key.y === position.y
                        ?
                        <FlightIcon style={{ fontSize: 38, textAlign: "center" }}/>
                        :
                        <></>
                    }
                </div>
                </Tooltip>
                :
                <></>
            }
        </div>
        </Tooltip>
        </>
    )
}
