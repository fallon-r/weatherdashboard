import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles/";
import CssBaseline from "@material-ui/core/CssBaseline";

import Nav from './components/Nav'

let theme =  createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#005533',
      contrastText: 'rgba(90,200,90,1)',
    },
    secondary: {
      main: '#3de6e6',
    },
    divider: '#a5c663',

    background: {
      default: '#FFFFFF',
      paper: '#88cc88',
    },
  },
  typography: {
    fontFamily: 'Play',
    h1: {
      fontFamily: 'Lato',
    },
    fontWeightRegular: 700,
  },
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

theme = responsiveFontSizes(theme);

function App() {

  const { root } = useStyles();


  return (
    <div className={root}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        </ThemeProvider>
    </div>
  );
}

export default App;
