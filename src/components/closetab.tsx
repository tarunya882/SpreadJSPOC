import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    grow: {
      backgroundColor:"black"
    },
}));

export default function Close(){
    const classes=useStyles();
    return(
        <>
        <div>
            "Tab"
        </div>
        {/* <CloseIcon  className={classes.grow}/> */}
        </>
    );
}