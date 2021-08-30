const { join } = require('path')

// set app variables
const __meta = {
    name: 'Weather',
    description: 'Weather app created with Express, Handlebars, Mapbox API, OpenWeatherMap API in Javascript.',
    version: '1.0.1',
    author: 'Daniel Monaghan'
}
const __sys = {
    paths: {
        publicPath: join(__dirname, '../public'),
        viewsPath: join(__dirname, '../templates'),
        partialsPath: join(__dirname, '../templates/partials')
    },
    network: {
        port: 3000,
        hostname: 'localhost'
    },
    display: {
        viewEngine: 'hbs'
    }
}
// Example User
const __user = {
    name: 'Daniel Monaghan',
    age: 30,
    location: {
        town: 'Manchester',
        country: 'United Kingdom',
        longitude: -2.244644,
        latitude: 53.483959
    }
}

// weather array
const __weather = {
    forecast: {
        sevenDays: [
            {
                weather: 'yes'
            }
        ],
        today: {
            date: Date.now(),
            day: 'Saturday',
            weather: {
                temp: 22,
                conditions: 'Clear'
            }
        }
    },
    location: __user.location
}


const config = {
    meta: __meta,
    sys: __sys,
    user: __user,
    weather: __weather
}

module.exports = config