$(document).ready(function() {

    // // JSON with all the cities
    // const { Dataset } = require('data.js')

    // const path = 'https://datahub.io/core/world-cities/datapackage.json'

    // // We're using self-invoking function here as we want to use async-await syntax:
    // ;

    // (async() => {
    //     const dataset = await Dataset.load(path)
    //         // get list of all resources:
    //     for (const id in dataset.resources) {
    //         console.log(dataset.resources[id]._descriptor.name)
    //     }
    //     // get all tabular data(if exists any)
    //     for (const id in dataset.resources) {
    //         if (dataset.resources[id]._descriptor.format === "csv") {
    //             const file = dataset.resources[id]
    //                 // Get a raw stream
    //             const stream = await file.stream()
    //                 // entire file as a buffer (be careful with large files!)
    //             const buffer = await file.buffer
    //                 // print data
    //             stream.pipe(process.stdout)
    //         }
    //     }
    // })(citydata);


    var uSearches = [];
    var key = "d083e7b9276f47f503fbf06a7f04eb88";
    var geoKey = "43d73a28304a40129ec3c08709f5fa7b"
    var uCity;
    var today = (new Date().getMonth() + 1) + "/" + new Date().getDate();
    var weatherURL;
    var lat;
    var lon;

    var coordGetURL;

    // CONSTRUCTOR FUNCTION TO GET COORDINATES
    function Query(city, lat, lon){
        this.city = city;
        this.lat= lat;
        this.lon = lon
    }

    var uQuery = new Query();


    //var input = document.getElementById("uCitySearch");
    // input.addEventListener("keyup", function(event) {
    //     if (event.keyCode === 13) {
    //         event.preventDefault();
    //         document.getElementById("searchBtn").click();
    //     }
    // });



    $("#searchBtn").click(function(event) {

        event.preventDefault();
        uCity = $("#uCitySearch").val();
        coordGetURL = "https://api.opencagedata.com/geocode/v1/geojson?q=" + uCity + "&key=" + geoKey + "&no_record=1"

        getCoords();

        $("#currentWeatherCard").show()


        // getWeather();
        // getForecast();
        $("#currentDate").text(today);
        // Pushes searches to array
        // uSearches.push(uCity);
        // localStorage.setItem("uSearches", uSearches);

    });

    function getCoords(){

        $.ajax({
            url: coordGetURL,
            method: "GET"
        }).then(function(response){
            uQuery.city = $("#uCitySearch").val();
            uQuery.lon = response.features[0].geometry.coordinates[0];
            uQuery.lat = response.features[0].geometry.coordinates[1];

            lat = uQuery.lat.toString();

            lon = uQuery.lon.toString();

            weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + key;
            uSearches.push("uSearches", JSON.stringify(uQuery));


            console.log(uQuery);
            console.log(weatherURL);
        })


        }


    // function getWeather() {
    //     $(document).ready(function() {
    //         console.log(weatherURL);
    //         $.ajax({
    //             url: weatherURL,
    //             method: "GET"
    //         }).then(function(response) {
    //             // console.log("Just today")
    //             console.log("this is the API Call for oneWeather")
    //             console.log(response);


    //         });
    //     });

    // };

    // function getUV() {

    //     console.log(UVIndexURL)
    //     $.ajax({
    //         url: UVIndexURL,
    //         method: "GET"
    //     }).then(function(response) {
    //         console.log("")
    //         console.log(response);

    //     })
    // };

    // function getForecast() {
    //     $(document).ready(function() {
    //         console.log(forecastQueryURL);
    //         $.ajax({
    //             url: forecastQueryURL,
    //             method: "GET"
    //         }).then(function(response) {
    //             console.log("Forecast");
    //             console.log(response);

    //             console.log(response.list[0].dt_txt.substr(5, 7))
    //                 // Render dates
    //             $("#weatherCardDay1").text(response.list[8].dt_txt.substr(5, 6))
    //             $("#weatherCardDay2").text(response.list[16].dt_txt.substr(5, 6))
    //             $("#weatherCardDay3").text(response.list[24].dt_txt.substr(5, 6))
    //             $("#weatherCardDay4").text(response.list[32].dt_txt.substr(5, 6))
    //             $("#weatherCardDay5").text(response.list[40].dt_txt.substr(5, 6))
    //         });
    //     });
    // };

    $("#currentWeatherCard").hide()


});