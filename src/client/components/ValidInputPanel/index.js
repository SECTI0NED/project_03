import React from 'react'
import { Typography, Button, Grid, Tooltip} from '@material-ui/core'
import { useGlobalStyles } from '../../styles/Global'
export const ValidInputPanel = ({handleButtonInput}) => {
    const global = useGlobalStyles()
    return (
        <>
            <div className={global.validInputBox}>
                <Typography style={{fontSize: 16}}>Valid Inputs</Typography>
                <Grid container direction="row" justifyContent="center">
                    <Grid item ></Grid>
                    <Grid item>
                        <Tooltip title="Up" placement="top">
                            <Button style={{fontSize: 18, fontWeight: "bold"}} value="^" onClick={handleButtonInput}>
                                {"^"}
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item ></Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Grid item>
                        <Tooltip title="Left" placement='left'>
                        <Button style={{fontSize: 16, fontWeight: "bold"}} value="<" onClick={handleButtonInput}>
                            {"<"}
                        </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Take photograph" placement='top'>
                        <Button style={{fontSize: 12, fontWeight: "bold"}} value="x" onClick={handleButtonInput}>
                            {"x"}
                        </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title='Right' placement='right'>
                        <Button style={{fontSize: 16, fontWeight: "bold"}} value=">" onClick={handleButtonInput}>
                            {">"}
                        </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Grid item></Grid>
                    <Grid item>
                        <Tooltip title='Down' placement='bottom'>
                        <Button style={{fontSize: 12, fontWeight: "bold"}} value="v" onClick={handleButtonInput}>
                            {"v"}
                        </Button>
                        </Tooltip>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
            </div>
        </>
    )
}
