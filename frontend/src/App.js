import React, { useState } from "react";
import axios from "axios";

export default function App() {
  // !States
  const [location, setLocation] = useState(null);
  const [photoSrc, setPhotoSrc] = useState(null);
  const [temp, setTemp] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  // TODO: Make Weather Call asynchronous; right now the lat and lon take too much time to be returned. I could have the state/town populate the field so that the user can verify that the town is correct. OR use the state from the button click.
  
  const handleClick = async (e) => {
    e.preventDefault();

    if ("geolocation" in navigator) {
      await navigator.geolocation.getCurrentPosition(
        (pos) => {
          // * Lat lon from geolocation
          setLon(pos.coords.longitude)
          setLat(pos.coords.latitude)

          const weatherUrl= `/weather/${lat}/${lon}`
          console.log(weatherUrl)
          axios
            .get(weatherUrl, {json:true})
            .then(res=>{
                console.log(res.data)
                const temp= res.data.current.temp
                setTemp(temp)
            })
            .catch(e => {
              console.error('Something went wrong with the weather server call', e)
            })

          // *Resolve City based on geolocation
          const latlon = encodeURIComponent(
            [pos.coords.latitude, pos.coords.longitude].join()
          );
          
          const reverseUrl = `/reverse/coords/${latlon}`;
          console.log(reverseUrl);
          axios
            .get(reverseUrl, { json: true })
            .then((res) => {
              const city = res.data.features[0].properties.components.city;
              const state = res.data.features[0].properties.components.state;

              setLocation(`${city}, ${state}`);

              const photoUrl= `/photo_search/${state}`
              axios
                .get(photoUrl, {json:true})
                .then(res=>{
                    // console.log(res.data)
                    const img= res.data.results[0].urls.full
                    setPhotoSrc(img)
                })
                .catch(e => {
                  console.error('Something went wrong with the photo server call', e)
                })
            })
            .catch((e) => {
              console.error("Something went wrong with the server call", e);
            });
        },
        (e) => {
          console.error("User does not consent to location");
        }
      );
    } else {
      console.err("I cannot find you");
    }
  };

  return (
    <div>
      <h1>Hi!</h1>
      <button onClick={handleClick}>I am a button</button>
      <p> You are here based on your browser location:</p>
      <p>{location}</p>
      <div style={{minHeight: '40vh', minWidth:'40vw', backgroundSize:'fill', backgroundImage:`url(${photoSrc})`, backgroundSize:'contain'}}>
      </div>
  <p> It is currently {temp} &deg;</p>
    </div>
  );
}
