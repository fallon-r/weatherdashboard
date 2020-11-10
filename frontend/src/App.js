import React,{useState} from 'react'
import axios from 'axios'

export default function App() {

  const [location, setLocation] = useState([])

const handleClick = async (e) =>{
  e.preventDefault()
  

  console.log('You clicked me')

  navigator.geolocation.getCurrentPosition((e)=>{
    const lat = e.coords.latitude;
     const lon = e.coords.longitude;
 
     const latlon = encodeURIComponent([lat,lon].join())
    console.log(latlon)
     return latlon
 })

  const url = "/reverse/coords/"

  // axios.get(url, {json:true})
  //   .then((res)=>{
  //     setLocation(res.data)
  //     console.log(res.data)
  //   })
  //   .catch((e)=>{
  //     console.error('uhoh')
  //   })
}



  return (
    <div>
        <h1>Hi!</h1>
        <button onClick={handleClick}>I am a button</button>
        <p> You are here based on your browser location:</p>
        {/* <p>{location.features.properties.components.city}</p> */}
    </div>
  )
}
