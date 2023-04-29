// import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import ActionsBar from './actionsBar';
// import FormulaBar from './formulaBar';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { fade, makeStyles,Theme } from '@material-ui/core/styles';
// import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';

// const useStyles = makeStyles((theme:Theme) => ({
//     bg: {
//      backgroundColor:"white",
//       height:"60px",
//       padding:"18px"
//     },
//     menu:{
//         color:"black"
//     },
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
//     text:{
//         color:"black",
        
//     },
//     tab:{
//         width: "507px",
//         marginTop: "-35px",
//         marginLeft: "16px",
//         color: "black"
//     },
//     add:{
//         color: "black",
//         marginLeft: "554px",
//         marginTop: "-70px"
//     },
//     blackButton:{
//         color:"red",
//     },
//     whiteButton:{
//         color:"blue",
//     }
// }));
// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: any;
//     value: any;
// }

// interface TabHeaderProps {
//     tablabel: any;
// }

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
// }

// function a11yProps(index: any) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

  
// function TabHeader(props:TabHeaderProps) {
//     const [value, setValue] = React.useState(0);
//     const [selected, setSelected] = React.useState(false);
//   const {tablabel}=props;
//   console.log(tablabel);
//   const classes = useStyles();
//   let i=0;

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setValue(newValue);
//   };

//   function handleClick(){
//       setSelected(true);
//   }

//   return (
//       <div>
//     <AppBar position="static" className={classes.bg} color="primary">
//         <MenuIcon className={classes.menu}/>
//         <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//         {
//                 tablabel.map((label:any)=>{
//                     console.log(label);
//                      // i++;
//                     return <Tab  className={classes.text} key={label.label}  label={label.label} />
//               })
//          }
//         </Tabs>
//         <AddBoxTwoToneIcon className={classes.add}/>
//     </AppBar>
//     {/* <AddBoxOutlinedIcon></AddBoxOutlinedIcon> */}
//     <ActionsBar />
//     <FormulaBar />
//     <>
//      {
//          tablabel?.map(((tab:any,index:any)=>{
//              return(
//                 <TabPanel value={value} key={tab.label} index={index}>
//                     {tab.content}
//               </TabPanel>
//              );
//          }))
//      }
//     </>
//     {/* <ActionsBar /> */}
//     {/* <SpreadSheet /> */}
//     </div>
//   );
// }

// export default TabHeader;





import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ActionsBar from './actionsBar';
import FormulaBar from './formulaBar';

import classes from '*.module.css';
import SpreadSheet from './spreadSheet';

import Close from './closetab';
const data1=require("../data/data.json");
const data2=require("../data/data2.json");

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
     // paddingLeft:"10px",
      // backgroundColor: theme.palette.background.paper,
      borderTop: "solid",
      borderTopWidth: "thin"
    },
    bg: {
      backgroundColor:"white",
      color:"black",
      //paddingLeft: "109px",
    /* margin-top: -9px; */
    // marginBottom: "-22px"
    },
    menu:{
        color:"black",
        marginTop:"12px",
        marginLeft:"5px"
    },
    tab:{
        backgroundColor:"red"
    },
    add:{
        color: "black",
        marginLeft: "60px",
        marginTop:"12px"
    },
    panel:{
        backgroundColor:"white"
    },
    spread:{
      width:"100%"
    },
    bg1:{
      marginLeft: "128px",
      marginBottom:"-20px !important",
      backgroundColor:"white",
      color:"black",
      fontSize:"15px"
    }
  }));

  
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
interface TabHeaderProps {
    tablabel: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      className={classes.panel}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function SimpleTabs(props:TabHeaderProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dataarray=[data1,data2,data2,data1,data2,data1,data2];
  const [data,setData]=React.useState(dataarray[0]);
  const {tablabel}=props;
  const [tabs1,setTab]=React.useState<string[]>(["1","2"]);
  const tabs=["Tab1","Tab2"];
  let i=0;
  const handleChange = (event: React.ChangeEvent<{}>, newValue:number) => {
      console.log(newValue);
      console.log(`${"data".concat(newValue.toString())}`);
      setValue(newValue);
      setData(dataarray[newValue]);
      
  };

  function addTab(){
    console.log("added")
    let id:number=tabs1.length+1;
    console.log(id);
    setTab(tabs1.concat(id.toString()));
    console.log(tabs1.length+1);
    setValue(tabs1.length);
    setData(dataarray[tabs1.length]);
  }

  function handleClose(e:any){
    
    console.log(e.target.id);
    const newList = tabs1.filter((i) => i !== e.target.id);
    setTab(newList);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        {/* <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        {
                tabs1.map((i)=>{
                    return <Tab    label={"Tab"+i}
                    icon={<CloseIcon className={classes.bg1} id={i} onClick={handleClose}/>}
                    />
               })
        }
            <AddBoxTwoToneIcon className={classes.add} onClick={addTab} />
            
        </Tabs> */}
      </AppBar>
      <ActionsBar />
      <FormulaBar />
     
               <TabPanel  value={value} key={value} index={value}>
                  <div className={classes.spread}><SpreadSheet  data={data}/></div> 
               </TabPanel>
            
    </div>
  );
}

