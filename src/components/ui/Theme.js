import { createTheme } from "@material-ui/core"; 

const black = '#000000';
const lightGray = '#f5f5f5';
const gray = '#E4E4E4';
const midGray = '#A9A9A9';
const heavyGray = '#5B5B5B';
const blue = '#083DCC';
const lightBlue = '#E6ECFA';
const green = '#1BB55C';
const white = '#ffffff';

export default createTheme({
  palette: {
    common: {
      blue: `${blue}`,
      lightBlue: `${lightBlue}`,
      green: `${green}`,
      white: `${white}`,
      black: `${black}`,
      lightGray: `${lightGray}`,
      gray: `${gray}`,
      midGray: `${midGray}`,
      heavyGray: `${heavyGray}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${green}`,
    }
  },

  typography: {
    h2: {
      fontWeight: 900,
      fontSize: 20,
    },
    h4: {
      fontWeight: 500,
      fontSize: 18,
    }
  },
});