require('dotenv').config()
const request = require('request');



function getCoordinates(city) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${process.env.geocodingAPIkey}`
    request(url, function (error, response, body) {
        try {
            const data = JSON.parse(body)
            const [lon, lat] = data.features[0].geometry.coordinates
            const placeName = data.place_name
            getWeather(lat, lon)
        } catch (error) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
        }

    });
}
function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.weatherAPIkey}`
    request(url, function (error, response, body) {
        try {
            let output = JSON.parse(body)
            console.log(`Current temperature in ${output.name}, ${output.sys.country} is ${convertToCelsius(output.main.temp)}C / ${output.main.temp}F\nConditions are currently: ${output.weather[0].main}.\nWhat you should expect: ${uppercase(output.weather[0].description)}
            ` )
        } catch (error) {
            console.error('error:', error);
            console.log('statusCode:', response && response.statusCode);
        }
    });
}
function uppercase(desc) {
    const uppercased = desc[0].toUpperCase() + desc.slice(1)
    return uppercased
}

function convertToCelsius (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2)
}

function init() {
    const city = process.argv[2]
    getCoordinates(city)
}

init()


