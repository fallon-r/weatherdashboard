# hw6weatherdashboard
A weather dashboard for travelers 

This project was made using:
- [Materialize CSS](https://materializecss.com/): This was my first real project using Materialize and I incorporated some bells and whistles. There are tool tips and a sidenav that I enjoyed making. It is not terribly different from Bootstrap, but the process was a lot more enjoyable. I feel it was easier to create something responsive without too editing the stylesheet so much.
- JQuery : because its all about the $$$$.
- [OpenWeatherMap](https://openweathermap.org/api): This was fun. There were a few burps working with some of the API calls that are explained a bit further down. 
- [OpenCage](https://opencagedata.com/): I found this to be necessary for getting the Latitude and longitude. 
- [Logomakr](https://logomakr.com/): This was used to make my personalized octocat in the footer. I think he's kind of cute

!["Personalized Octocat"](weatherlogo.png)


This project has been pretty fun thus far. There are a few quirks:

1. Firstly, the old API calls do not work/have become deprecated. In order to get things like the UV index, you would need to use a different call, and it became a bit unwieldy. Additionally, the forecast feature using the old call was a nightmare. It generated the forecast from the time of the call, so it was imprecise as far as organizing and interpreting on the user side. To combat this, I switched to OpenWeather's [OneCall API](https://openweathermap.org/api/one-call-api). This added a new dimension of difficulty; this call only receives the latitude and longitude to make its queries. In an effort to address, this I downloaded a gargantuan CSV with 20,000 lines of cities and relevant info. My theory was that I could use that to add a new bit of razzle-dazzle: auto-complete. This proved to be a bit too difficult. While I was able to excise some of the extraneous bits of info from the CSV/JSON, it impacted how quickly the page would load and seemed to be a bit overwrought. Ultimately, I decided to use [OpenCage](https://opencagedata.com/). This is a cool API that allows you to make forward and reverse geocoding calls. There are some cool features, like getting a geoJSON response and  *no_record* and *pretty*  options. *no_record* is added to prevent OpenCage from logging your searches, which is a nice feature for privacy oriented people, as well as an alternative to Google. *pretty* makes the result a bit more human-readable.
2. In order make things feel a bit more slick and mobile ready, I opted for a sidenav that contained the previous searches. I grew to like the minimalism. For this reason, it does not match exactly to what 
3. I incorporated some funky tooltips that I thought were cool. They explain some of the features on the page and help the user.
4. This was made with a small screen in mind. My hope is that it would look good on a phone/tablet. 
5. Down the line, it would be fun to incorporate some of the core parts of this project into a raspberry pi smart mirror. Additionally, I want to dynamically change the background of the div that houses the weather card with an image that corresponds to the weather of the current day. 