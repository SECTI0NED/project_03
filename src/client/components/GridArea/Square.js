
import {TAKE_PHOTO, PATH, START, UP, RIGHT, DOWN, LEFT} from "../../constants"
import React, {useContext} from 'react'
import { useStyles } from "./styles"
import { Tooltip } from "@material-ui/core";
import { CurrentPoseContext } from "../../context/CurrentPoseContext";
import { Drone } from "./Drone";
export const Square = ({gridData}) => {
    const {firstPose} = useContext(CurrentPoseContext)
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
