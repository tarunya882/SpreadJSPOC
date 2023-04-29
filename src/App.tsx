import React from "react";
import logo from "./logo.svg";
import PrimarySearchAppBar from "../src/components/header";
import TabHeader from "../src/components/tabs";
import SpreadSheet from "../src/components/spreadSheet";
import ActionsBar from "../src/components/actionsBar";
import SimpleTabs from "../src/components/tabs";
import { fade, makeStyles } from "@material-ui/core/styles";
import Filter from "../src/components/Filter/index";
import data from "../src/data/data.json";
// interface SpreadSheetProps {
//   data: any;
// }
const useStyles = makeStyles((theme) => ({
  app: {
    // backgroundColor:"black",
  },
}));

function App() {
  const classes = useStyles();
  const data = require("./data/data.json");
  const data1 = require("./data/data2.json");
  const defaultSpreadSheet = [<SpreadSheet data={data} />];
  const defaultSpreadSheet1 = [<SpreadSheet data={data1} />];
  const tabs = [
    { label: "Tab1", content: defaultSpreadSheet },
    { label: "Tab2", content: defaultSpreadSheet1 },
    { label: "Tab3", content: defaultSpreadSheet1 },
  ];
  return (
    <div>
      <div className={classes.app}>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <SimpleTabs tablabel={tabs} />
        <ActionsBar />
        <Filter />
      </div>
      <div
        style={{
          width: "30%",
          zIndex: 1,
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Filter />
      </div>
      <SpreadSheet data={data} />
    </div>
  );
}

export default App;
