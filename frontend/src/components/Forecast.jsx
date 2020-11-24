import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {weatherData} from '../utils/testdata'

const Forecast = () => {
    const forecast = weatherData.daily.slice(1,6)
    return (
        <>
                      {
            forecast.map((day, index)=> {return (

              <Grid item key={index} xs={12} md={2}>
                <Card>
                  <CardContent>
                    {new Date(day.dt * 1000).toLocaleString().substr(0,5)}<br />
                    {day.temp.day} <br/>
                    <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} maxWidth="100%" height="auto"/>
                  </CardContent>
                </Card>
              </Grid>
            )}
            )
          }
        </>
    )
}

export default Forecast
