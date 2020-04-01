var uSearches = [];
var key = "0cfb89d7960d5eaeceaeda6dff8c4963";
var uCity;
var currentQueryURL;
var forecastQueryURL;
var UVURL;


var input = document.getElementById("uCitySearch");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});



$("#searchBtn").click(function(event) {
    event.preventDefault();
    uCity = $("#uCitySearch").val();
    currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uCity + "&appid=" + key;
    forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + uCity + "&appid=" + key;
    // UVURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + key;

    getWeather();
    getForecast();

    // Pushes searches to array
    uSearches.push(uCity);
});

function getWeather() {
    $(document).ready(function() {
        console.log(currentQueryURL);
        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#currentCity").text(response.name)
            $("#currentTemp").text((parseInt(((response.main.temp) - 273.15) * 1.8) + 32) + "°F");
            $("#currentConditions").text(response.weather[0].main)
            $("#currentUV").text()

        });
    });

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
            // $("#currentCity").text(response.name)
            // $("#currentTemp").text((parseInt(((response.main.temp) - 273.15) * 1.8) + 32) + "°F");
        });
    });
}