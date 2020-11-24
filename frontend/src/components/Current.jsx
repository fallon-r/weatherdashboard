import React from "react";
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Paper from "@material-ui/core/Paper"
// import {green, yellow, orange, purple} from "@material-ui/core/colors/"
import {weatherData, photoRes} from '../utils/testdata'

const Current = () => {

  const colorResolver = (uv) => {
    let result =[]
    if(uv == null){
      return `UVI is not available`
    }else if (uv <= 2){
      result = ["green", "Low"]
      return result
  
    }else if (uv >= 3 && uv <= 5){
      result = ["yellow", 'Moderate']
      return result
    
    }else if (uv >= 6  && uv <= 7){
      result = ["orange", "High"]
      return result
    
    }else if (uv >= 8  && uv <= 10){
      result = ["red", "Very High"]
      return result
    
    }else if (uv >= 6  && uv <= 7){
      result = ["purple", "EXTREME"]
      return result
    }
  }

  const uvBlock= colorResolver(weatherData.current.uvi)

  return (
    <>
      <Container
        style={{
          backgroundImage:
            `url(${photoRes.results[0].urls.full})`,
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
            <h3>Antarctica </h3> <br />
            {weatherData.current.temp} &deg; F<br />
            {weatherData.current.humidity} % <br />
            {`Wind Speed : ${weatherData.current.wind_speed} mph`} <br />
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
            />{" "}
            <br />
            {weatherData.current.weather[0].description} <br />
            UV:
            <Paper style={{backgroundColor:uvBlock[0], maxHeight:"15%", width:"auto"}}>{uvBlock[1]}</Paper> 
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Current;
