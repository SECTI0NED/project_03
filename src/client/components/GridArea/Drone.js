import FlightIcon from '@material-ui/icons/Flight';
import { DOWN, LEFT, RIGHT, UP } from "../../constants";
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