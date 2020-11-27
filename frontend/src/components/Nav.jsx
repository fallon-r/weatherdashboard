import React, { useState, useEffect } from "react";
import { loadPos } from "../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOnSharp";
import CloseIcon from "@material-ui/icons/Close";
import DrawerContents from "./DrawerContents"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  input: {
    marginLeft: "auto",
    flex: 1,
    maxWidth: "50vw",
    position: "relative",
    color: "secondary"
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  drawerContents: {
    position: "relative",
    minWidth: "50vw",
  },
}));

export default function Nav(props) {
  const classes = useStyles();

  const [searchHist, setSearchHist] = useState([])
  const [uSearch, setUsearch] = useState("");
  const [uCoords, setUCoords] = useState(null);
  const [searchButton, setSearchButton] = useState(true);
  const [locButton, setLocButton] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // * Drawer Toggle
  const drawerToggle = () => setDrawerOpen(!drawerOpen);
  


  // * Get user location on page load
  useEffect(() => {
    const enableLocation = async () => {
      await loadPos();
      await setUCoords(JSON.parse(localStorage.getItem("userLocation")));
    };
    enableLocation();
  }, []);

  // * Button toggle for location / search
  useEffect(() => {
    if (uCoords == null) {
      setLocButton(true);
    } else {
      setLocButton(false);
    }
  }, [uCoords]);

  useEffect(() => {
    if (uSearch === "") {
      setSearchButton(true);
    } else {
      setSearchButton(false);
    }
  }, [uSearch]);
// *______________________________________

// * Retrieve History
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('SearchHist')) != null){
      setSearchHist(JSON.parse(localStorage.getItem('SearchHist')))
    }
  }, [])


// * Button Handlers 

  const locationClick = (e) => {
    e.preventDefault();
    // const latlon = encodeURIComponent(uCoords.join());
    console.log(uCoords[0]);
    console.log(uCoords[1]);
  };

  const searchSubmit = (e) => {
    e.preventDefault();

    // ! Keeps stored searches to <10
    let updatedHist = searchHist
    if(updatedHist.length >= 10){
      updatedHist.shift()
    }
    updatedHist.splice(0,0, uSearch)
    setSearchHist(updatedHist)    
    localStorage.setItem("SearchHist", JSON.stringify(searchHist))
  };
// *_______________________________________
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Tooltip title="View previous searches" placement="bottom">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={drawerToggle}
          >

            <MenuIcon />
          </IconButton>
            </Tooltip>
          <InputBase
            className={classes.input}
            placeholder="Search Weather"
            autoFocus
            color="secondary"
            inputProps={{ "aria-label": "search for weather" }}
            id="search"
            onChange={(e) => setUsearch(e.target.value)}
            style={{border:"groove 1px rgba(255,255,255,0.6", paddingLeft:"1vw"}}
            required
          />
            <Tooltip title="Search for a city" placement="bottom">
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            disabled={searchButton}
            onClick={searchSubmit}
          >

            <SearchIcon />
          </IconButton>
            </Tooltip>
          <Divider className={classes.divider} orientation="vertical" />
          <Tooltip title="Get your location's weather" placement="bottom">
          <IconButton
            color="secondary"
            className={classes.iconButton}
            aria-label="local weather"
            onClick={locationClick}
            disabled={locButton}
          >

            <LocationOnIcon />
          </IconButton>
            </Tooltip>
        </Toolbar>
      </AppBar>


      <Drawer  open={drawerOpen}>
        <IconButton
          color="secondary"
          className={classes.iconButton}
          aria-label="close drawer"
          onClick={drawerToggle}
          edge="end"
        >
          <CloseIcon />
        </IconButton>
        <div className={classes.drawerContents}>
            <DrawerContents />
        </div>
      </Drawer>

    </>
  );
}

