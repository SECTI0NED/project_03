import { useContext } from 'react';
import FlightIcon from '@material-ui/icons/Flight';
import { CurrentPoseContext } from "../../context/CurrentPoseContext";
import {UP, RIGHT, DOWN, LEFT} from "../../constants"
import { useStyles } from './styles';
export const Drone = ({pose}) => {
    const classes = useStyles()

    if(pose.orientation === UP){
        return <FlightIcon style={{ transform: "rotate(0deg)"}} className={classes.drone} />
    }
    if(pose.orientation === RIGHT){
        return <FlightIcon style={{ transform: "rotate(90deg)"}} className={classes.drone} />
    }
    if(pose.orientation === DOWN){
        return <FlightIcon style={{ transform: "rotate(180deg)"}} className={classes.drone} />
    }
    if(pose.orientation === LEFT){
        return <FlightIcon style={{ transform: "rotate(270deg)"}} className={classes.drone} />
    }
}