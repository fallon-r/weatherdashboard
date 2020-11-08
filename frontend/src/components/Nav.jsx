import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const Nav = () => {
    return (
        <>
         <AppBar position="relative" >
        <Toolbar>
          <Typography variant="h4" color="inherit" noWrap>
            Weather Dashboard
          </Typography>
        </Toolbar>
      </AppBar>   
        </>
    )
}

export default Nav