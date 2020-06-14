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
    var key = "0cfb89d7960d5eaeceaeda6dff8c4963";
    var uCity;
    var currentQueryURL;
    var forecastQueryURL;
    var UVIndexURL;
    var today = (new Date().getMonth() + 1) + "/" + new Date().getDate();
    var lat;
    var lon;
    var onecall = "https://api.openweathermap.org/data/2.5/onecall?q=&exclude=hourly,daily,minutely&appid=0cfb89d760d5eaeceaeda6dff8c496
    ";


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
        currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uCity + "&appid=" + key + "&units=imperial";
        forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + uCity + "&appid=" + key + "&units=imperial";
        $("#currentWeatherCard").show()
        UVIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + key;

        getWeather();
        getForecast();
        getUV();
        $("#currentDate").text(today);
        // Pushes searches to array
        uSearches.push(uCity);
        localStorage.setItem("uSearches", uSearches);

    });

    function getWeather() {
        $(document).ready(function() {
            console.log(currentQueryURL);
            $.ajax({
                url: currentQueryURL,
                method: "GET"
            }).then(function(response) {
                console.log("Just today")
                console.log(response);
                $("#currentCity").text(response.name)
                $("#currentTemp").text((parseInt(((response.main.temp))) + "°F"));

                // - 273.15) * 1.8) + 32)
                $("#currentConditions").text(response.weather[0].main)
                $("#currentWindSpeed").text("Wind Speed:" + (parseInt(response.wind.speed * 2.23694)) + " mph ");
                $("#currentHumidity").text("Humidity " + response.main.humidity + "%");




                // UV is a separate call and needs the lat/lon
                lon = response.coord.lon;
                lat = response.coord.lat;


            });
        });

    };

    function getUV() {

        console.log(UVIndexURL)
        $.ajax({
            url: UVIndexURL,
            method: "GET"
        }).then(function(response) {
            console.log("")
            console.log(response);

        })
    };

    function getForecast() {
        $(document).ready(function() {
            console.log(forecastQueryURL);
            $.ajax({
                url: forecastQueryURL,
                method: "GET"
            }).then(function(response) {
                console.log("Forecast");
                console.log(response);

                console.log(response.list[0].dt_txt.substr(5, 7))
                    // Render dates
                $("#weatherCardDay1").text(response.list[8].dt_txt.substr(5, 6))
                $("#weatherCardDay2").text(response.list[16].dt_txt.substr(5, 6))
                $("#weatherCardDay3").text(response.list[24].dt_txt.substr(5, 6))
                $("#weatherCardDay4").text(response.list[32].dt_txt.substr(5, 6))
                $("#weatherCardDay5").text(response.list[40].dt_txt.substr(5, 6))
            });
        });
    };

    $("#currentWeatherCard").hide()


});