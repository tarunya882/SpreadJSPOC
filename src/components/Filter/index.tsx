import React, { useCallback, useState } from "react";
import {
  Grid,
  Box,
  Theme,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
// import DropDown from '../../atoms/DropDown';
import { makeStyles } from "@material-ui/core/styles";
import DropDown from "../DropDown/Dropdown";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

export type FilterComponentProps = {};

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "grid",
    borderRadius: "6px",
    backgroundColor: "#FFF",
    // boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
  },
  header: {
    color: "#5A5A5A",
  },
  divider: {
    backgroundColor: "#F5B873",
    margin: "0px 4px",
    // opacity: 0.5,
    width: "100%",
    border: "1px solid ",
  },
  marginRight: {
    marginRight: "8px",
    // color:"transparentSecondary",
    color: "#18b0f1f2",
  },
  middle: {
    height: "300px",
    "& .css-n5uvzf-MuiInputBase-root-MuiOutlinedInput-root": {
      width: "348px",
      backgroundColor: "#DCF3FD",
      height: "40px",
    },
    "& .css-11lq3yg-MuiGrid-root": {
      marginTop: "20px",
    },
  },
  rowDropDown: {
    width: "275px",
    marginLeft: "4px",
    marginTop: "30px",
  },
  rowDropDown2: {
    width: "-webkit-fill-available",
    marginLeft: "4px",
    marginTop: "15px",
  },
});

var items = [
  {
    id: "1",
    name: "Dropdown 1",
  },
  {
    id: "2",
    name: "Drop down name 2",
  },
  {
    id: "3",
    name: "Drop down name 3",
  },
];

const FilterComponent = () => {
  const classes = useStyles();
  const [countryCode, setCountryCode] = useState<any>();
  const [region, setRegion] = useState<any>();
  const [currency, setCurrency] = useState<any>();
  const onCountryChange = (event: any) => {
    setCountryCode(event.target.value);
  };

  const onRegionChange = (event: any) => {
    setRegion(event.target.value);
  };

  const onCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid container style={{ display: "grid", padding: "17px" }}>
        <Grid
          xs={5}
          spacing={0}
          direction={"column"}
          align-items={"flex-start"}
          justify-content={"center"}
        >
          <Box width="100%" marginLeft="4px">
            <Typography variant="h3" className={classes.header} noWrap>
              Filters
            </Typography>
          </Box>
          <Divider
            variant="fullWidth"
            style={{ backgroundColor: "#F5B873", border: "1px solid #F5B873" }}
          />
        </Grid>
        <Grid className={classes.middle}>
          <Grid container>
            <DropDown
              items={items}
              className={classes.rowDropDown}
              selectedId={countryCode}
              onChange={onCountryChange}
              testId="dropDown"
              placeHolderText={"Country Code"}
            />
            {/* <EditIcon />
            <DeleteIcon /> */}
          </Grid>
          <Grid container>
            <DropDown
              items={items}
              className={classes.rowDropDown2}
              selectedId={region}
              onChange={onRegionChange}
              testId="dropDown"
              placeHolderText={"Region"}
            />
          </Grid>
          <Grid container>
            <DropDown
              items={items}
              className={classes.rowDropDown2}
              selectedId={currency}
              onChange={onCurrencyChange}
              testId="dropDown"
              placeHolderText={"Currency"}
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid container justify-content="flex-end">
            <Button
              style={{ marginRight: "8px", color: "#18b0f1f2" }}
              variant="text"
            >
              Reset
            </Button>
            <Button
              style={{ backgroundColor: "#fc7500", color: "#FFFFFF" }}
              title="Save Filter"
            >
              Save Filter
            </Button>
          </Grid>
        </Grid> 
      </Grid> 
    </div>
  );
};

export default FilterComponent;
