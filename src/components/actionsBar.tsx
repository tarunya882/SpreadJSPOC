import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    bg: {
      backgroundColor:"white",
      color:"black",
      height:"50px",
      padding:"15px",
      paddingLeft:"30px",
      borderBottom: "outset",
      borderBottomWidth: "thin",
      borderBottomColor: "black"
    },
    menu:{
        color:"black"
    },
    fl:{
        color: "black",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30px"
    },
    f1:{
        marginLeft: "213px",
    marginTop: "-23px",
    color:"black"
    },
    typo:{
        color:"black",
        marginTop: "-25px",
    marginLeft: "60px"
    },
    typo1:{
        color:"black",
        marginLeft:"240px",
        marginTop:"-25px"
    },
    typ2:{
        color:"black",
        marginLeft:"386px",
        marginTop:"-23px"
    },
    typ:{
        color:"black",
        marginLeft:"360px",
        marginTop:"-25px"
    },
    share:{
        color:"black",
        marginLeft: "1319px",
    marginTop: "-25px"
    },
    bar:{
        color:"black",
        marginLeft: "1365px",
    marginTop: "-25px"
    },
    blur:{
        color:"black",
        marginLeft: "1270px",
    marginTop: "-25px"
    }
}));

function ActionsBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bg}>
        {/* <FilterListIcon className={classes.fl}/>
        <Typography className={classes.typo}>What if scenario</Typography>
        <VisibilityOutlinedIcon className={classes.f1}/>
        <Typography className={classes.typo1}>Back testing</Typography>
        <PublishOutlinedIcon className={classes.typ}/>
        <Typography className={classes.typ2}>Publish</Typography>
        <ShareIcon className={classes.share}/>
        <BarChartIcon className={classes.bar}/>
        <BlurCircularIcon className={classes.blur}/> */}
    </AppBar>
  );
}

export default ActionsBar;
