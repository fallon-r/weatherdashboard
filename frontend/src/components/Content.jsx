import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"
import Forecast from './Forecast'
import Current from './Current'


const Content = (props) => {



  return (
      <Container maxWidth="md">
      
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} style={{paddingBottom:'2vh', paddingTop:'1vh'}}>
        <Current weatherData={props.weatherData} photoRes={props.photoRes}/>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="space-evenly" alignItems="baseline">
            <Forecast weatherData={props.weatherData}/>
        </Grid>
      </Grid>
    </Grid>
    </Container>

  );
};

export default Content;
