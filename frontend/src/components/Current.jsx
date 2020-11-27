import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

const Current = (props) => {
  const colorResolver = (uv) => {
    let result = [];
    if (uv == null) {
      return `UVI is not available`;
    } else if (uv <= 2) {
      result = ["green", "Low"];
      return result;
    } else if (uv >= 3 && uv <= 5) {
      result = ["yellow", "Moderate"];
      return result;
    } else if (uv >= 6 && uv <= 7) {
      result = ["orange", "High"];
      return result;
    } else if (uv >= 8 && uv <= 10) {
      result = ["red", "Very High"];
      return result;
    } else if (uv >= 6 && uv <= 7) {
      result = ["purple", "EXTREME"];
      return result;
    }
  };

  const uvBlock = colorResolver(props.weatherData.current.uvi);

  const bgUrl = props.photoRes.results[0].urls.full;

  return (
    <>
      <Container
        style={{
          backgroundImage: `url(${bgUrl ? bgUrl : null})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "transparent",
        }}
      >
        <Card
          style={{
            minHeight: "55vh",
            textAlign: "center",
            backgroundColor: "rgba(222, 222, 222, 0.5)",
          }}
        >
          <CardContent>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={12} sm={12}>
                <p className="city">Antarctica </p>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <p className="details">
                  {props.weatherData.current.temp} &deg; F / Real Feel {props.weatherData.current.feels_like}  &deg; F
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <p className="details">
                  Humidity : {props.weatherData.current.humidity} %
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <p className="details">
                  {`Wind Speed : ${props.weatherData.current.wind_speed} mph`}
                </p>
              </Grid>
              <img
                src={`http://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}
               alt={props.weatherData.current.weather[0].description}/>{" "}
              <Grid item xs={12} sm={6} md={3}>
                <p className="conditions details">
                  {props.weatherData.current.weather[0].description}
                </p>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper
                  style={{
                    backgroundColor: uvBlock[0],
                    maxHeight: "15%",
                    width: "auto",
                  }}
                >
                  UVI: {uvBlock[1]}
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Current;
