import React from 'react'

import { Tooltip } from "@material-ui/core";
import { PATH, START, TAKE_PHOTO } from "../../constants";
import { Drone } from "./Drone";
import { useStyles } from "./styles";

export const SquareData = ({gridData, pathColor, photographedColor, droneColor, pose}) => {
    const classes = useStyles()
    return (
        <div>
            {
                gridData.item === PATH
                ?
                <div className={pathColor}>
                    {
                        gridData.key.x === pose.position.x && gridData.key.y === pose.position.y
                        ?
                        <Drone pose={pose}/>
                        :
                        <></>
                    }
                </div>
                :
                <></>
            }
            {
                gridData.item === TAKE_PHOTO
                ?
                <Tooltip title={`Photographed (${gridData.key.x}, ${gridData.key.y})`}>
                <div className={photographedColor}>
                    {
                        gridData.key.x === pose.position.x && gridData.key.y === pose.position.y
                        ?
                        <Drone pose={pose}/>
                        :
                        <></>
                    }
                </div>
                </Tooltip>
                :
                <></>
            }
            {
                gridData.item === START
                ?
                <Tooltip title={`Start (${gridData.key.x}, ${gridData.key.y})`}>
                <div className={classes.start}>
                    {
                        gridData.key.x === pose.position.x && gridData.key.y === pose.position.y
                        ?
                        <Drone pose={pose}/>
                        :
                        <></>
                    }
                </div>
                </Tooltip>
                :
                <></>
            }
        </div>
    )
}
