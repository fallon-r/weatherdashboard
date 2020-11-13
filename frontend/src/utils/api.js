export const resolveLocation =  (latlon) =>{ 
     return fetch(`/reverse/coords/${latlon}`)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .catch(e=> {console.error("Couldn't connect ", e)})
}
export const queryLocation =  (loc) =>{ 
     return fetch(`/forward/coords/${loc}`)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .catch(e=> {console.error("Couldn't connect ", e)})
}
export const photoQuery =  (query) =>{ 
     return fetch(`/photo_search/${query}`)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .catch(e=> {console.error("Couldn't connect ", e)})
}
export const getForecast =  (lat, lon) =>{ 
     return fetch(`/weather/${lat}/${lon}`)
        .then(res=>{
            if(!res.ok){
                throw new Error(res.status)
            }
            return res.json()
        })
        .catch(e=> {console.error("Couldn't connect ", e)})
}