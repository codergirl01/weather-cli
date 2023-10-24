require('dotenv').config()
const request = require('request');



function getCoordinates(city) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${process.env.geocodingAPIkey}`
    request(url , function (error, response, body) {
        const data = JSON.parse(body)
        const [lon, lat] = data.features[0].geometry.coordinates
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', JSON.parse(body).features[0].geometry.coordinates); // Print the HTML for the Google homepage.
        const placeName = data.place_name
        getWeather(lat, lon)
    });
}
function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.weatherAPIkey}`
    request(url , function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
        
    });
}
function init() {
    const city = process.argv[2]
    getCoordinates(city)
}

init()


