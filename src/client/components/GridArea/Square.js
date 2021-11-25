
import {TAKE_PHOTO, PATH, START, UP, RIGHT, DOWN, LEFT} from "../../constants"
import React, {useContext} from 'react'
import { useStyles } from "./styles"
import { Tooltip } from "@material-ui/core";
import { CurrentPoseContext } from "../../context/CurrentPoseContext";
import { Drone } from "./Drone";
export const Square = ({data}) => {
    const {pose} = useContext(CurrentPoseContext)
    const classes = useStyles()
 
    return (
        <>
        <Tooltip title={data.item !== START && data.item !== TAKE_PHOTO ?`(${data.key.x}, ${data.key.y})`: ""}>
        <div className={classes.square}>
            {
                data.item === PATH
                ?
                <div className={classes.path}>
                    {
                        data.key.x === pose.position.x && data.key.y === pose.position.y
                        ?
                        <Drone />
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
                        data.key.x === pose.position.x && data.key.y === pose.position.y
                        ?
                         <Drone />
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
                        data.key.x === pose.position.x && data.key.y === pose.position.y
                        ?
                         <Drone />
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
