const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles(() => ({
    square: {
        border: "solid 1px",
        borderColor: "rgba(85, 139, 224, 0.3)",
        height: 40,
        width: 40,
    },
    start: {
        backgroundColor: "#32a852",
        height: 38,
        width: 38,
    },
    "@keyframes path": {
        from: {
            backgroundColor: "rgba(0,0,0,0.0)"
        },
        to: {
            backgroundColor: "#3271a8"
        },
    },
    path: {
        backgroundColor: "#3271a8",
        height: 38,
        width: 38,
        animationName: "$path",
        animationDuration: "1s",
    },
    "@keyframes photo": {
        from: {
            backgroundColor: "rgba(0,0,0,0.0)",
        },
        to: {
            backgroundColor: "#a83252",
        },
    },
    photographed: {
        backgroundColor: "#a83252",
        height: 38,
        width: 38,
        animationName: "$photo",
        animationDuration: "1s",
    },
    "@keyframes drone": {
        from: {
            color: "rgba(0,0,0,0.0)"
        },
        to: {
            color: "white"
        }
    },
    drone: {
        fontSize: 38, 
        textAlign: "center",
        animationName: "$drone",
        animationDuration: "2s"
    }
}))