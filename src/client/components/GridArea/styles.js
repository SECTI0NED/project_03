const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles(() => ({
    square: {
        border: "solid 1px",
        borderColor: "rgba(85, 139, 224, 0.3)",
        height: 40,
        width: 40,
    },
    start: {
        backgroundColor: "rgba(219, 219, 219, 0.25)",
        height: 38,
        width: 38,
    },
    "@keyframes path": {
        from: {
            backgroundColor: "rgba(0,0,0,0.0)"
        },
        to: {
            backgroundColor: "rgba(80, 133, 199, 0.8)"
        },
    },
    path: {
        backgroundColor: "rgba(80, 133, 199, 0.8)",
        height: 38,
        width: 38,
        animationName: "$path",
        animationDuration: "1s",
    },

    
    secondDronePath: {
        backgroundColor: "rgba(217, 80, 80, 1.0)"
    },


    "@keyframes photo": {
        from: {
            backgroundColor: "rgba(0,0,0,0.0)",
        },
        to: {
            backgroundColor: "rgba(54, 107, 194, 0.8)",
        },
    },
    photographed: {
        backgroundColor: "rgba(54, 107, 194, 0.8)",
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
            color: "#cff0ff"
        }
    },
    drone: {
        color: "#cff0ff",
        fontSize: 38, 
        textAlign: "center",
        animationName: "$drone",
        animationDuration: "2s"
    }
}))