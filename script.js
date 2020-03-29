var uSearches = [];
var key = "0cfb89d7960d5eaeceaeda6dff8c4963";
var uCity;
var queryURL;


$("#searchBtn").click(function(event) {
    event.preventDefault();
    uCity = $("#uCitySearch").val();
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uCity + "&appid=" + key;
    getWeather();

    // Pushes searches to array
    uSearches.push(uCity);
});

function getWeather() {
    $(document).ready(function() {
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            $("#currentCity").text(response.name)
            $("#currentTemp").text(tempConvert(response.main.temp))
        });
    });

};

function tempConvert(valNum) {
    valNum = ((valNum - 273.15) * 1.8) + 32;
};