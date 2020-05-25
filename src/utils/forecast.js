const request = require('request');
const forecast = (longitude, latitude, callback) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=87dd2277c6634df8937dbc748b36a3bc&lat=${latitude}&lon=${longitude}`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (response.body.error) {
            callback('Unable to find location!');
        } else {
            const temp = response.body.data[0]["temp"];
            const pop = response.body.data[0]["pop"];
            const describe = response.body.data[0]["weather"]["description"];
            forecastString = `${describe}.It is currently ${temp} degrees out. There is a ${pop}% chance of rain.`
            callback(undefined, forecastString);
        }
    })
}

module.exports = forecast;