import React, { useState, useEffect } from "react";
import { loadPos } from "./utils/utils";
import { resolveLocation } from "./utils/api";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles/";
import Nav from './components/Nav'

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
  const [uCoords, setUCoords] = useState(null);
  const [button, setButton] = useState(true);

  // * Get user location on page load
  useEffect(() => {
    const enableLocation = async () => {
      await loadPos();
      await setUCoords(JSON.parse(localStorage.getItem("userLocation")));
    };
    enableLocation();
  }, []);
  // * Button toggle for location based search
  useEffect(() => {
    if (uCoords == null) {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [uCoords]);

  const handleClick = (e) => {
    e.preventDefault();
    const latlon = encodeURIComponent(uCoords.join());

    const getCity = async () => {
      const response = await resolveLocation(latlon);

      console.log(response);
    };

    getCity();

    console.log(button);
    console.log(uCoords[0]);
    console.log(uCoords[1]);
  };

  return (
    <div className="root">
         <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
      </ThemeProvider>
    </div>
  );
}
