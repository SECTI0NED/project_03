const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles(() => ({
    square: {
        border: "solid 1px",
        borderColor: "rgba(85, 139, 224, 0.3)",
        height: 40,
        width: 40,
    },
    start: {
        backgroundColor: "green",
        height: 38,
        width: 38,
    },
    path: {
        backgroundColor: "blue",
        height: 38,
        width: 38,
    },
    photographed: {
        backgroundColor: "yellow",
        height: 38,
        width: 38,
    }
}))