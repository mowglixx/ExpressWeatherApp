const request = require('postman-request')
const { sys } = require('./apistub')

const forecast = (
    longitude = '-2.2451148',
    latitude = '53.47948920000002',
    callback = {}
) => {

    const apiKey = 'a498a3aed4f383c0861298b8c8aca494'
    const apiHost = 'api.openweathermap.org'
    const apiEndpoint = '/data/2.5/weather?units=metric&lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&appid=' + encodeURIComponent(apiKey)
    const url = 'https://' + apiHost + apiEndpoint

    request({ url, json: true }, (err, { statusCode }, { name, sys, weather, main } = {}) => {

        if (weather) {

            // success
            callback(undefined, {
                weather: weather[0].main,
                temperature: main.temp,
                town: name,
                country: sys.country,
                url
            })

        } else if (statusCode !== '200') {

            callback(
                {
                    message: 'No Body found in response',
                    url,
                    statusCode: statusCode
                },
                undefined)

        } else {
            // fail
            callback('OOPSIE! - Unable to connect to Weather Service\nURL used for API Call:\n' + apiURL, undefined)
        }
    })
}

module.exports = {
    forecast
}