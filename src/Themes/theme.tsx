import { createMuiTheme } from "@material-ui/core/styles";
// import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    type:"dark",
    primary: {
      main: "#99acc2",
      dark: "#005398",
      light: "#5485ae",
      contrastText:"#000000",
    },
    secondary: {
      main: "#005398",
     light: "#BBDEFB",
      contrastText: "#98a9bc",
      dark: "#64B5F6",
    },
    action: {
      hover: "#f6f6f6",
    },
    text: {
      primary: "#fff",
      secondary: "blue"
    },
    grey: {
      100: '#1c1c21',
      200:'#d32f2f,'
    }
  },
  spacing: 4,
  typography: {
   // fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
   fontFamily:"Times New Roman",
   fontWeightBold:"bold",   

   
  }
});

export default theme;