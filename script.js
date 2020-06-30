$(document).ready(function() {


    var uSearches = [];
    var key = process.env.weatherKey;
    var geoKey = process.env.geoKey;
    var uCity;
    var today = (new Date().getMonth() + 1) + "/" + new Date().getDate();
    var weatherURL;
    var lat;
    var lon;

    var coordGetURL;
    var degreeUnit;
    var speedUnit;

    // CONSTRUCTOR FUNCTION TO GET COORDINATES
    function Query(city, lat, lon){
        this.city = city;
        this.lat= lat;
        this.lon = lon
    }

    var uQuery = new Query();


    $("#searchBtn").click(function(event) {

        event.preventDefault();
        uCity = $("#uCitySearch").val();
        coordGetURL = "https://api.opencagedata.com/geocode/v1/geojson?q=" + uCity + "&key=" + geoKey + "&no_record=1"

        // Get coordinates using open cage api instead of using the 
        getCoords();

        $("#currentWeatherCard").show()


        $("#currentDate").text(today);
    });

    function getCoords(){

        $.ajax({
            url: coordGetURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            $("#currentCity").text(response.features[0].properties.formatted)
            uQuery.city = $("#uCitySearch").val();
            uQuery.lon = response.features[0].geometry.coordinates[0];
            uQuery.lat = response.features[0].geometry.coordinates[1];

            lat = uQuery.lat.toString();

            lon = uQuery.lon.toString();

            

            if ($("#unit").is(":checked") === true){

                weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&units=imperial&appid=" + key;

                degreeUnit = "°F"
                speedUnit = "MPH"
            }else{

                weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&units=metric&appid=" + key;
                degreeUnit = "°C"
                speedUnit = "km/H"
            }
            uSearches.push(uQuery);
            
            localStorage.setItem("uSearches", JSON.stringify(uSearches))

            console.log(uQuery);
            console.log(weatherURL);

            function getWeather() {
        
                // console.log(weatherURL);
                $.ajax({
                    url: weatherURL,
                    method: "GET"
                }).then(function(response) {
                    // console.log("Just today")
                    console.log("this is the API Call for oneWeather")
                    console.log(response);
                    // $("#currentCity").text();
                    $("#currentConditions").text(response.current.weather[0].main);
                    $("#currentTemp").text(response.current.temp + degreeUnit);
                    $("#currentHumidity").text(response.current.humidity + "%");
                    $("#currentWindSpeed").text(response.current.wind_speed+ " "+speedUnit);
                    function UV (){
                        $("#uvBlock").removeClass();
                        console.log(response.current.uvi);
                        // console.log(response.current.uvi > 2);

                        if (response.current.uvi <= 2){
                            $("#currentUV").text("Low");

                            $("#uvBlock").addClass("z-depth-4 left-align col-s2 green");
                        } else if (response.current.uvi > 2 && response.current.uvi <= 5){
                            $("#currentUV").text("Moderate");
                            $("#uvBlock").addClass("yellow");
                        }else if (response.current.uvi > 5 && response.current.uvi <= 7){
                            $("#currentUV").text("High");
                            $("#uvBlock").addClass("z-depth-4 left-align col-s2 orange");

                        }else if (response.current.uvi > 7 && response.current.uvi <= 10){
                            $("#currentUV").text("Very High");
                            $("#uvBlock").addClass("z-depth-4 left-align col-s2 red");

                        }else if (response.current.uvi > 11){
                            $("#currentUV").text("Extreme");
                            $("#uvBlock").addClass("z-depth-4 left-align col-s2 purple lighten-4");

                        }
                    }
                    UV();
                    
                });
        };

        getWeather();
        })


        }

    $("#currentWeatherCard").hide()


});