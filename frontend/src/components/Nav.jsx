import React, {useState, useEffect} from "react";
import { loadPos } from "../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOnSharp";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  input: {
    marginLeft: 'auto',
    flex: 1,
    maxWidth: '50vw',
    position: 'relative',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [uSearch, setUsearch] = useState('')
  const [uCoords, setUCoords] = useState(null);
  const [searchButton, setSearchButton] = useState(true);
  const [locButton, setLocButton] = useState(true);

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
    if (uSearch === '') {
      setSearchButton(true);
    } else {
      setSearchButton(false);
    }
  }, [uSearch]);

  const locationClick = (e) => {
    e.preventDefault();
    // const latlon = encodeURIComponent(uCoords.join());

    
    console.log(uCoords[0]);
    console.log(uCoords[1]);
  };
  const searchSubmit = (e) => {
    e.preventDefault();

    console.log(uSearch);

    localStorage.setItem(`${uSearch}`, JSON.stringify(`${uSearch}`))


  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        
          <InputBase
            className={classes.input}
            placeholder="Search Weather"
            inputProps={{ "aria-label": "search for weather" }}
            id="search"
            onChange={e => setUsearch(e.target.value)}
            required
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            disabled={searchButton}
            onClick={searchSubmit}
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            color="secondary"
            className={classes.iconButton}
            aria-label="local weather"
            onClick={locationClick}
            disabled={locButton}
          >
            <LocationOnIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

// TODO: Fix drawer;
// TODO: add skeleton for retrieved queries (https://material-ui.com/components/skeleton/).
// TODO : Review (https://material-ui.com/components/text-fields/) for actual search bar
