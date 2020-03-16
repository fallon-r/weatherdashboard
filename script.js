var uSearches = [];
var uCity;
var key = "0cfb89d7960d5eaeceaeda6dff8c4963";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + uCity + "&appid=" + key;

function getWeather() {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });


};

$("#searchBtn").click(function(event) {
    event.preventDefault();
    uCity = $("#uCitySearch").val();
    getWeather();
    uSearches.push(uCity);

    localStorage.setItem("savedUserSearches", JSON.stringify(uSearches));
    console.log("Search Button worked")
});