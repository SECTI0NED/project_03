import { makeStyles } from "@material-ui/core";

export const useGlobalStyles = makeStyles(() => ({
    center: {
        justifyContent: "center",
        display: "flex"
    },

    validInputBox: {
        padding: "20px 20px 42px 20px",
        borderRadius: 10,
        backgroundColor: "rgba(156, 156, 156, 0.2)",
        color: "white",
    }
}))