import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

const styles  = makeStyles({
    bar : {
        //paddingTop: "1rem",
        //paddingBottom: "1rem",
        backgroundColor: "#D3D3D3",
        padding: "2rem",
        marginBottom: "150px",
    },
    title : {
        color: "#000000",
        //textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        //padding: "50px",
        fontSize: "20",
    },
    box : {
        color: "#d3d3d3",
    }
})

function Navbar() {
    const classes = styles();
    return (
        <Box sx={{flexGrow: 1}} className={classes.box}>
        <AppBar position="static">
            <Toolbar className={classes.bar}>
                <Typography variant="h3" className={classes.title}>
                    Smart Park
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Navbar;
