import React from 'react';
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles,} from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        marginLeft: "2rem",
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    <div><img src="/image/book.png" style={{width: "80px", height: "50px"}} className="bg-transparent" alt="Error"/></div>
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/signup" className={classes.link}>
                        ADMIN
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
