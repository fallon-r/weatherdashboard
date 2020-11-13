import React, { useState, useEffect } from "react";
import {loadPos} from './utils/utils'
import {resolveLocation} from './utils/api'

export default function App() {
  // !States
  // const [location, setLocation] = useState(null);
  // const [photoSrc, setPhotoSrc] = useState(null);
  // const [temp, setTemp] = useState(null);
  const [uCoords, setUCoords] = useState(null);
  const [button, setButton] = useState(true)
  

  // * Get user location on page load
  useEffect(() => {
    const enableLocation= async ()=>{
    await loadPos();
    await setUCoords(JSON.parse(localStorage.getItem("userLocation")))
  }
    enableLocation()
  }, []);
  // * Button toggle for location based search
  useEffect(()=>{
    if(uCoords == null){
      setButton(true)
    }else{
      setButton(false)}
  }, [uCoords])




  const handleClick =  (e) => {
    e.preventDefault();
    const latlon = encodeURIComponent(uCoords.join())

    const getCity =  async () => {
      const response =  await resolveLocation(latlon)
      
      console.log(response)
    }

    getCity()

    console.log(button)
    console.log(uCoords[0]);
    console.log(uCoords[1])
  };

  return (
    <div>
      <h1>Hi!</h1>
      <button onClick={handleClick} disabled={button}>I am a button</button>
      <p> You are here based on your browser location:</p>
    </div>
  );
}
