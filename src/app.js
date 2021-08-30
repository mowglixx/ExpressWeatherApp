// import modules needed for combined weather and geocode service
const { geocode } = require('./geocode')
const { forecast } = require('./weather')

// import exprestt
const express = require('express')
const hbs = require('hbs')
const { sys, user, meta, weather } = require('./apistub')

const app = express()


// set Express server port
app.listen(sys.network.port, () => {
    console.log(meta.appName)
    console.log('Server live at: http://' + sys.network.hostname + ':' + sys.network.port)
})
// Set app to use hbs (Handlebars)
app.set('view engine', sys.display.viewEngine)

// set Directorys for use in app
// Serve '/public' Directory for express
// needed for 'static' assets suchas images and CSS files
app.use(express.static(sys.paths.publicPath))

// Handlebars Views and Partials Paths
app.set('views', sys.paths.viewsPath)
hbs.registerPartials(sys.paths.partialsPath)


// Home Page
// Weather Forcast page
app.get('', (req, res) => {
    res.render('index', {
        meta,
        weather,
        user,
        page: {
            title: 'Forecast',
            body: 'This is the homepage where you will find the latest Forecast data',
        }
    })
});

// About Page (STUB)
app.get('/about', (req, res) => {
    res.render('about', {
        meta,
        page: {
            title: 'About',
            body: 'This is the about page',
        }
    })
})

// Help Page (STUB)
app.get('/help', (req, res) => {
    res.render('help', {
        meta,
        page: {
            title: 'Help',
            body: 'This is a helpful message',
        }
    })
})

// Weather API
app.get('/weather/:location', ({ params: p }, res) => {
    // locationService passes lat,lon to weatherService via callback
    geocode(p.location, (error, { longitude, latitude, url: lurl } = {}) => {
        if (error) {
            res.send({ message: 'Location Error', error, lurl })
        }
        else {
            //console.log('Location Success', { latitude, longitude, place_name })
            forecast(longitude, latitude, (error, { weather, temperature: temp, town, country, url: wurl } = {}) => {
                if (error) {
                    res.send({ message: 'Weather Error', error, url })
                } else {
                    res.send({
                        weather: {
                            temp,
                            currently: weather,
                            url: wurl
                        },
                        location: {
                            town,
                            country,
                            longitude,
                            latitude,
                            url: lurl
                        }
                    })

                }
            })
        }
    })
})

// Weather API 404 (Wildcard to prevent no location being sent to the function)
app.get('/weather*', ({ params: p }, res) => {
    res.send({ errorMessage: 'No location given' })
})




// Help 404
app.get('/help/*', (req, res) => {
    res.render('404', {
        meta,
        page: {
            title: 'Not found',
            errorMessage: 'Help article not found',
        }
    })
});

// 404
app.get('/*', (req, res) => {
    res.render('404', {
        meta,
        page: {
            title: 'Not found',
            errorMessage: 'The content you are looking for is not here',
        }
    })
    // console.log(req)
});