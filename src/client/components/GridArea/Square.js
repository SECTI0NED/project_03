
import { Tooltip } from "@material-ui/core";
import React, { useContext } from 'react';
import { PATH, START, TAKE_PHOTO } from "../../constants";
import { DroneContext } from "../../context/DroneContext";
import { Drone } from "./Drone";
import { SquareData } from "./SquareData";
import { useStyles } from "./styles";

export const Square = ({gridData}) => {
    const {firstPose, secondPose, gridDataType} = useContext(DroneContext)
    const classes = useStyles()
 
    return (
        <>
        <Tooltip title={gridData.item !== START && gridData.item !== TAKE_PHOTO ? `(${gridData.key.x}, ${gridData.key.y})`: ""}>
        <div className={classes.square}>
            {
                gridDataType === 'first'
                ?
                <SquareData 
                    gridData={gridData} 
                    pathColor={classes.firstpath} 
                    photographedColor={classes.photographed} 
                    pose={firstPose}
                />
                :
                <></>
            }
            {
                gridDataType === 'second'
                ?
                <SquareData 
                    gridData={gridData} 
                    pathColor={classes.secondpath} 
                    photographedColor={classes.secondPhotographed} 
                    pose={secondPose}
                />
                :
                <></>
            }
            {
                gridDataType === 'both'
                ?
                    <SquareData 
                    gridData={gridData} 
                    pathColor={classes.path} 
                    photographedColor={classes.photographed} 
                    pose={firstPose}
                />
                :
                <></>
            }
        </div>
        </Tooltip>
        </>
    )
}
