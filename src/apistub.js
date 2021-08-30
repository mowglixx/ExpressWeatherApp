const { join } = require('path')

// set app variables
const __meta = {
    appName: 'ExpressWeatherApp',
    description: 'ExpressWeatherApp is A progressive web app written in Javascript using [Express](https://expressjs.com/), [Handlebars](https://www.npmjs.com/package/hbs) view engine and [Bootstrap](https://getbootstrap.com/) CSS to display Weather from [OpenWeatherMap](openweathermap.org) using latitude and longitude from a user input and lookup using [Mapbox](https://mapbox.com) Geocode API',
    version: '1.0.2',
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