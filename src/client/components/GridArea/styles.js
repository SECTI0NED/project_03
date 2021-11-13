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
    path: {
        backgroundColor: "#3271a8",
        height: 38,
        width: 38,
    },
    photographed: {
        backgroundColor: "#a83252",
        height: 38,
        width: 38,
    }
}))