import { IconButton } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import Close from "@material-ui/icons/Close"
import { Collapse } from '@material-ui/core'
import React from 'react'

export const ErrorDialog = ({error, closeError}) => {
    return (
        <Collapse in={error.error}>
            <div style={{paddingTop: 20, paddingBottom: 20}}>
            <Alert severity="error" variant="outlined" action={
                <IconButton onClick={closeError} color="inherit">
                    <Close/>
                </IconButton>}>
                <AlertTitle>Error</AlertTitle>
                {error.message}
            </Alert>
            </div>
        </Collapse>
    )
}
