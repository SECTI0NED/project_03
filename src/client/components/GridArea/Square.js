
import {ORIGIN_X, ORIGIN_Y, TAKE_PHOTO, PATH, START, UP, RIGHT, DOWN, LEFT} from "../../constants"
import React, {useContext} from 'react'
import { useStyles } from "./styles"
import FlightIcon from '@material-ui/icons/Flight';
import { Tooltip } from "@material-ui/core";
import { CurrentPoseContext } from "../../context/CurrentPoseContext";

export const Square = ({data}) => {
    const {pose} = useContext(CurrentPoseContext)
    const classes = useStyles()
    const Drone = () => {
        if(pose.orientation === UP){
            return <FlightIcon style={{ fontSize: 38, textAlign: "center", transform: "rotate(0deg)"}}/>
        }
        if(pose.orientation === RIGHT){
            return <FlightIcon style={{ fontSize: 38, textAlign: "center", transform: "rotate(90deg)"}}/>
        }
        if(pose.orientation === DOWN){
            return <FlightIcon style={{ fontSize: 38, textAlign: "center", transform: "rotate(180deg)"}}/>
        }
        if(pose.orientation === LEFT){
            return <FlightIcon style={{ fontSize: 38, textAlign: "center", transform: "rotate(270deg)"}}/>
        }
    }
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
