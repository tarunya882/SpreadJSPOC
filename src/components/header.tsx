import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "azure",
  },
  bg: {
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  img: {
    width: "150px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    color: "black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  icon: {
    padding: "12px",
    color: "black",
  },
  color: {
    color: "black",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const renderMobileMenu = (
    <div>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11}>
            {/* <NotificationsIcon /> */}
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <img
            src="https://cdn.highradius.com/wp-content/uploads/2021/06/Pride-Month_HRC_Logo_280x60.svg"
            className={classes.img}
            alt="HighRadius"
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <SearchIcon className={classes.icon} /> */}
            <IconButton
              aria-label="show 1 new notifications"
              className={classes.color}
              color="inherit"
            >
              <Badge badgeContent={1} color="secondary">
                {/* <NotificationsIcon /> */}
              </Badge>
            </IconButton>
            {/* <SettingsIcon className={classes.icon} /> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              {/* <AccountCircle className={classes.color} /> */}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
              className={classes.color}
            >
              {/* <MoreIcon /> */}
            </IconButton>
          </div>
          <Typography className={classes.color}>Jane</Typography>
          {/* <ArrowDropDownIcon className={classes.color} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
https://trends.ajio.com/aurelia-foil-print-anarkali-kurta-suit-set-with-dupatta/p/441200957_green