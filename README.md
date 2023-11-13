# weather-cli

### How to run on localhost:

**1. Clone the project to local**

```
git clone https://github.com/codergirl01/weather-cli.git
```

**2. Run `npm install`**
This command installs all the packages this project needs. Alternatively, packages can be installed individually:

**dotenv**
```javaScript
npm i dotenv
```
API keys are stored in the ```.env``` file and uses ```process.env``` to access these API keys. Please see documentation on this: [Documentation](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env). API keys used in this project will need to be registered and obtained through [OpenWeather API](https://openweathermap.org/api) and [geocoding section of the Mapbox api](https://docs.mapbox.com/api/search/#forward-geocoding).

**request**
```javaScript
npm i request
```
**3. Run javascript file**

This package takes in a city, village, or municipalityin as an argument.

*Example*
```
node app.js vancouver
```
This will return a summary of the weather for the region defined in the argument through the command line.

*Example*
```
Current temperature in Vancouver, CA is 139.39C / 282.91F
Conditions are currently: Clouds.
What you should expect: Few clouds.
```
