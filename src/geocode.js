const request = require('postman-request')

const geocode = (location = 'Manchester, UK', callback = {}) => {
    
    const apiKey = 'sk.eyJ1IjoibW93Z2xpeHgiLCJhIjoiY2tyY2F6M24yMXpzdjJxbHByM3lremFmbyJ9.vF4cXdrgK7LRaX2JxM1cCg'
    const apiHost = 'api.mapbox.com'
    const apiEndpoint = '/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token=' + encodeURIComponent(apiKey) + '&limit=1&types=place'
    const url = 'https://' + apiHost + apiEndpoint
    
    request({ url, json: true }, (err, {statusCode}, {features}) => {
        if (!err && statusCode == '200' && features.length !== 0) {
            const { place_name, text, context, center } = features[0]
            callback(undefined, {
                town: text,
                place_name,
                context,
                latitude: center[1],
                longitude: center[0],
                url: url
            })
        } else {
            callback({
                    message: 'Location Not Found',
                    url,
                    error: err
                },
                undefined
                )
        }
    })
}

module.exports = {
    geocode
}