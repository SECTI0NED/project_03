
import { Tooltip } from "@material-ui/core";
import React, { useContext } from 'react';
import { PATH, START, TAKE_PHOTO } from "../../constants";
import { DroneContext } from "../../context/DroneContext";
import { Drone } from "./Drone";
import { useStyles } from "./styles";
export const Square = ({gridData}) => {
    const {firstPose} = useContext(DroneContext)
    const classes = useStyles()
 
    return (
        <>
        <Tooltip title={gridData.item !== START && gridData.item !== TAKE_PHOTO ? `(${gridData.key.x}, ${gridData.key.y})`: ""}>
        <div className={classes.square}>
            {
                gridData.item === PATH
                ?
                <div className={classes.path}>
                    {
                        gridData.key.x === firstPose.position.x && gridData.key.y === firstPose.position.y
                        ?
                        <Drone pose={firstPose}/>
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
                <div className={classes.photographed}>
                    {
                        gridData.key.x === firstPose.position.x && gridData.key.y === firstPose.position.y
                        ?
                        <Drone pose={firstPose}/>
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
                        gridData.key.x === firstPose.position.x && gridData.key.y === firstPose.position.y
                        ?
                        <Drone pose={firstPose}/>
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
