import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {weatherData} from "../utils/testdata"


const Content = (props) => {

  const forecast = weatherData.daily.slice(1,6)

  return (
      <Container maxWidth="md">
      
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} style={{paddingBottom:'4vh', paddingTop:'3vh'}}>
        <Container style={{backgroundImage:'url(https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE4MTYxOH0)',backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundColor:'transparent'}}>

        <Card style={{ minHeight: "55vh", textAlign:'center', backgroundColor:'rgba(222, 222, 222, 0.5)'}} >
          <CardContent>
            <h3>Antarctica </h3> <br/>
            {weatherData.current.temp} &deg; F<br/>
            {weatherData.humidity}  % <br />
            {`Wind Speed : ${weatherData.current.wind_speed} mph`} <br />
            <img src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} /> <br />
            {weatherData.current.weather[0].description} <br />
            UV
          </CardContent>
        </Card>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="space-evenly" alignItems="stretch" style={{paddingBottom:'1vh'}}>
          {
            forecast.map((day, index)=> {return (

              <Grid item key={index} xs={12} md={2}>
                <Card>
                  <CardContent>
                    {new Date(day.dt * 1000).toLocaleString().substr(0,5)}
                    {day.temp.day} <br/>
                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                  </CardContent>
                </Card>
              </Grid>
            )}
            )
          }
        </Grid>
      </Grid>
    </Grid>
    </Container>

  );
};

export default Content;
