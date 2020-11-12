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

  const handleClick = (e) => {
    e.preventDefault();

    const getCurrentPos = (options = {})=>{
      return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      })
    }

    const loadPos= async () =>{
      try {
          const position = await getCurrentPos()
          const {latitude, longitude} = position.coords

          await setLat(latitude)
         await  setLon(longitude)

          await console.log(`${lat}; ${lon}`)

      } catch (error) {
        console.error('UhOH!,', error)
      }
    }

    loadPos()
  };

  return (
    <div>
      <h1>Hi!</h1>
      <button onClick={handleClick}>I am a button</button>
      <p> You are here based on your browser location:</p>
      <p>{location}</p>
      <div
        style={{
          minHeight: "40vh",
          minWidth: "40vw",
          backgroundSize: "fill",
          backgroundImage: `url(${photoSrc})`,
          backgroundSize: "contain",
        }}
      ></div>
      <p> It is currently {temp} &deg;</p>
    </div>
  );
}
