import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // !States
  const [location, setLocation] = useState(null);
  const [photoSrc, setPhotoSrc] = useState(null);
  const [temp, setTemp] = useState(null);

  // * Get user location on page load
  const getCurrentPos = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };
  const loadPos = async () => {
    try {
      const position = await getCurrentPos();
      const { latitude, longitude } = position.coords;

      const userCoords = [latitude, longitude];
      // await console.log(`${lat}; ${lon}`)
      await localStorage.setItem("userLocation", JSON.stringify(userCoords));
    } catch (error) {
      console.error("UhOH!,", error);
    }
  };
  useEffect(() => {
    loadPos();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const uCoords = JSON.parse(localStorage.getItem('userLocation'))
    console.log(uCoords[0]);
    console.log(uCoords[1])
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
