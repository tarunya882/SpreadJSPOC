import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GC from "@grapecity/spread-sheets";
import ActionsBar from './actionsBar';
import {
  SpreadSheets,
  Worksheet,
  Column,
  IEventTypeObj,
} from "@grapecity/spread-sheets-react";
import theme from "../Themes/theme";

const useStyles = makeStyles((theme:Theme) => ({
  bg: {
    backgroundColor: "white",
    height: "80px",
    padding: "28px",
  },
  menu: {
    color: "black",
  },
  root:{
   // backgroundColor: theme.palette.type === "dark" ? "black" : "lightblue",
  }
}));

interface SpreadSheetProps {
  data: any;
}


function SpreadSheet(props:SpreadSheetProps) {
  const classes = useStyles();
  let spreadBackColor = 'white';
  let sheetName = 'Goods List';
  let hostStyle:any =
  {
  width: '1200px',
  height: '500px',
 // scroll:"no-scroll",
  };
  let columnWidth = 100;
  // const [data,setData]=useState<SheetData>(props);
   const {data}=props;
 // const data= require("../data/data.json");

  let workbookInit=(spread:GC.Spread.Sheets.Workbook)=>{

    var activeSheet=spread.getActiveSheet();
    activeSheet.setDataSource(data);
    activeSheet.options.allowCellOverflow=true;
    activeSheet.options.colHeaderVisible=true;
    activeSheet.options.rowHeaderVisible=false;
    // activeSheet.options.allowContextMenu=true;
    activeSheet.options.selectionBorderColor=theme.palette.primary.light;
    var style1 = new GC.Spread.Sheets.Style();
    style1.font = "bold 15px Arial";
    // let formater= `{$#.##,,"M"}`
    style1.foreColor = theme.palette.text.primary;
    style1.backColor = theme.palette.primary.light;
    style1.cellPadding = '0 0 0 10';
    style1.hAlign = GC.Spread.Sheets.HorizontalAlign.left;
    // style1.vAlign = GC.Spread.Sheets.VerticalAlign.bottom;
    activeSheet.setFormatter(1,2,"#,##0_);[Red](#,##0.00)",GC.Spread.Sheets.SheetArea.viewport);
    activeSheet.setFormatter(1,2,"#,##0_);[Red](#,##0.00)",GC.Spread.Sheets.SheetArea.viewport);

    var style2 = new GC.Spread.Sheets.Style();
    style2.font = "bold 15px Arial";
    //style2.font=theme.typography.fontSize;
    style2.foreColor = theme.palette.text.primary;
    style2.backColor = theme.palette.primary.dark;
    style2.hAlign = GC.Spread.Sheets.HorizontalAlign.left;
    // style2.vAlign = GC.Spread.Sheets.VerticalAlign.left;
    style2.cellPadding = '0 0 0 20'
    activeSheet.bind(GC.Spread.Sheets.Events.LeaveCell, function (event:any, infos:any) {
       // infos.sheet.getCell(infos.row,infos.col).backColor("#949494");
        infos.sheet.getCell(infos.row,infos.col).foreColor('blue');
     });
     activeSheet.bind(GC.Spread.Sheets.Events.EnterCell, function (event:any, infos:any) {
       // var cell = infos.sheet.getCell(infos.row,infos.col);
       // cell.borderLeft(new GC.Spread.Sheets.LineBorder("green", GC.Spread.Sheets.LineStyle.thick));
       infos.sheet.getCell(infos.row,infos.col).foreColor(theme.palette.text.secondary);
    });

    // activeSheet.bind(GC.Spread.Sheets.Events.CellDoubleClick, 
    //     function (sender:any, args:any) 
    //     {
    //         if(args.sheetArea === GC.Spread.Sheets.SheetArea.viewport)
    //         {
    //             args.sheet.getCell(args.row,args.col).foreColor(theme.palette.grey[200]);
    //             console.log("The column header was clicked.");
    //         }
    // });

    activeSheet.bind(GC.Spread.Sheets.Events.CellClick, 

        function (sender:any, args:any) 
        {
            if(args.sheetArea === GC.Spread.Sheets.SheetArea.viewport)
            {
              args.sheet.getCell(args.row,args.col)
               args.sheet.getCell(args.row,args.col).foreColor("red");
               // console.log("The column header was clicked.");
               var cell = args.sheet.getCell(args.row,args.col);
              // cell.borderLeft(new GC.Spread.Sheets.LineBorder("red", GC.Spread.Sheets.LineStyle.thick));
            }
    });

    activeSheet.setRowCount(3, GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setRowCount(16, GC.Spread.Sheets.SheetArea.viewport);
    activeSheet.addSpan(1, 0, 1, 3, GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.addSpan(1, 3, 1, 2, GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setValue(1, 0, "Book Details", GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setValue(1, 3, "Author Details", GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.addColumns(0,1);
  //  activeSheet.addRows(5,1);
    activeSheet.setValue(1, 0, {info:"Cash flow categories"}, GC.Spread.Sheets.SheetArea.colHeader);
    console.log(activeSheet.getCell(1,0).value);
    activeSheet.setValue(2, 0, "", GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setColumnWidth(1,150.0,GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setRowHeight(1,35.0,GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setRowHeight(2,35.0,GC.Spread.Sheets.SheetArea.colHeader);

    var row = activeSheet.getRange(0, 0, 0, 0, GC.Spread.Sheets.SheetArea.colHeader);
    row.foreColor("black");


    var activeSheet = spread.getActiveSheet();
    const tdata = activeSheet.toJSON(true);
    console.log("daa",tdata);
activeSheet.bind(GC.Spread.Sheets.Events.EditStarting, function (sender:any, args:any) 
{  
    // var cell = args.sheet.getCell(args.row,args.col);
    // cell.borderLeft(new GC.Spread.Sheets.LineBorder("Blue", GC.Spread.Sheets.LineStyle.thick));
    // cell.borderTop(new GC.Spread.Sheets.LineBorder("Blue", GC.Spread.Sheets.LineStyle.double));
    // cell.borderRight(new GC.Spread.Sheets.LineBorder
    // ("Blue", GC.Spread.Sheets.LineStyle.dashDot));
    // cell.borderBottom(new GC.Spread.Sheets.LineBorder
    // ("Blue", GC.Spread.Sheets.LineStyle.mediumDashed));
    // console.log(cell);
});


    var defaultstyle=new GC.Spread.Sheets.Style();
    defaultstyle.foreColor=theme.palette.grey[100];
    defaultstyle.hAlign=GC.Spread.Sheets.HorizontalAlign.center;
    defaultstyle.vAlign = GC.Spread.Sheets.VerticalAlign.center;
    defaultstyle.formatter="0.00";
    defaultstyle.font = theme.typography.fontFamily;
    defaultstyle.borderBottom=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle.borderTop=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle.borderLeft=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle.borderRight=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
  
    var defaultstyle1=new GC.Spread.Sheets.Style();
    defaultstyle1.font = "bold 17px sans-serif";
    defaultstyle.foreColor=theme.palette.primary.contrastText;
    defaultstyle1.borderBottom=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle1.borderTop=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle1.borderLeft=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle1.borderRight=new GC.Spread.Sheets.LineBorder(theme.palette.grey[100],GC.Spread.Sheets.LineStyle.thin);
    defaultstyle1.cellPadding= '0 0 0 100';
    // defaultstyle1.shrinkToFit = true;
    defaultstyle1.hAlign = GC.Spread.Sheets.HorizontalAlign.left;
    activeSheet.autoFitColumn(0);
    // activeSheet.autoFitRow(0);
    activeSheet.autoFitColumn(1);
    // activeSheet.autoFitRow(1);
    activeSheet.autoFitColumn(2);
    // activeSheet.autoFitRow(2);
    activeSheet.autoFitColumn(3);
    // activeSheet.autoFitRow(3);
    activeSheet.autoFitColumn(4);
    // activeSheet.autoFitRow(4);
    activeSheet.autoFitColumn(5);
    // activeSheet.autoFitRow(5);
    activeSheet.autoFitColumn(6);
    // activeSheet.autoFitRow(6);
    activeSheet.setValue(0, 1, "testing\r\nmultiple\r\nlines");
activeSheet.getCell(0,1).wordWrap(true);
// activeSheet.autoFitRow(0);
    activeSheet.setDefaultStyle(defaultstyle,GC.Spread.Sheets.SheetArea.colHeader);
    activeSheet.setDefaultStyle(defaultstyle,GC.Spread.Sheets.SheetArea.viewport);
    var rowCount=activeSheet.getRowCount();
    var colCount=activeSheet.getColumnCount();

   
    var cell = activeSheet.getCell(1, 1, GC.Spread.Sheets.SheetArea.viewport);
      cell.hAlign(GC.Spread.Sheets.HorizontalAlign.center);
      cell.vAlign(GC.Spread.Sheets.VerticalAlign.center);

    for(var i=0;i<rowCount;i++){
      activeSheet.setRowHeight(i,35.0,GC.Spread.Sheets.SheetArea.viewport);
    }
    for(var i=0;i<colCount;i++){
      // activeSheet.setColumnWidth(i,150.0,GC.Spread.Sheets.SheetArea.viewport);
      activeSheet.setStyle(1, i+1, style1, GC.Spread.Sheets.SheetArea.colHeader);
      //activeSheet.setStyle(2, i+1, style2, GC.Spread.Sheets.SheetArea.colHeader);
      activeSheet.setStyle(2, i+1, defaultstyle1, GC.Spread.Sheets.SheetArea.colHeader);
    }
  }

  const cellDoubleClickHandler=(type:IEventTypeObj,args:GC.Spread.Sheets.ICellDoubleClickEventArgs)=>{
    let sheet:GC.Spread.Sheets.Worksheet=args?.sheet;
    if(args.sheetArea===GC.Spread.Sheets.SheetArea.viewport){
      const columnCount=sheet.getColumnCount();
      console.log(args.row);
      console.log(args.sheet.getCell(args.row,args.col).text())
    }
  }

  return (
    <div className={classes.root}>
      <SpreadSheets
        backColor={spreadBackColor}
        hostStyle={hostStyle}
        workbookInitialized={workbookInit}
        cellDoubleClick={cellDoubleClickHandler}
      >
      </SpreadSheets>
    </div>
  );
}

export default SpreadSheet;
