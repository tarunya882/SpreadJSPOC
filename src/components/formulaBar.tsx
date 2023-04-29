import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    typo:{
        color:"black",
        fontStyle: "italic",
    fontFamily: "cursive",
    marginLeft: "45px",
    marginTop: "1px",
    fontSize: "x-large"
    },
    bg:{
        backgroundColor:"white",
        height:"40px",
        borderTop: "solid",
        borderTopWidth: "thin",
        borderBottom: "solid",
        borderBottomColor: "black",
        borderBottomWidth: "thin"
    },
    vl:{
        borderLeft: "2px solid black",
        height: "30px",
        position: "absolute",
        left: "5%",
        marginLeft:"-6px",
        marginTop:"5px"
    },
    typo1:{
        color:"black",
        marginLeft:"1268px",
        marginTop:"-29px"
    }, 
}));

function FormulaBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bg}>
        <Typography className={classes.typo}>fx</Typography>
        <div className={classes.vl}></div>
        <Typography className={classes.typo1}>Expand Formula</Typography>
    </AppBar>
  );
}

export default FormulaBar;
