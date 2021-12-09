import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        type: "dark",
        background: {
            color: "#2b2b2b"
        },
        primary: {  
            main: "#558be0"
        },
        error: {
            main: "#ad4040"
        },
        typography: {
            color: "white"
        }
    }
})