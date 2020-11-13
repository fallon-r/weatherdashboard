import { resolveLocation } from "./utils/api";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles/";
import Nav from './components/Nav'
import Content from './components/Content'

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#81d4fa",
    },
    secondary: {
      main: "#006064",
    },
    background: {
      default: "#ccc",
      paper: "#ddd",
    },
    divider: "#1a237e",
  },
  typography: {
    fontFamily: "Poppins",
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

export default function App() {
  const { root } = useStyles();

  // !States
  // const [location, setLocation] = useState(null);
  // const [photoSrc, setPhotoSrc] = useState(null);
  // const [temp, setTemp] = useState(null);


  return (
    <div className="root">
         <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Content />
      </ThemeProvider>
    </div>
  );
}
