import React from "react";
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import {weatherData} from '../utils/testdata'

const Current = () => {
  return (
    <>
      <Container
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE4MTYxOH0)",
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
            UV
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Current;
