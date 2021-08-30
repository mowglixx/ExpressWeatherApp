// Client Side Java script!!!
console.log('Client Side Javascript File is loaded')

const magic = () => {
    console.log('Magic Done ')
}

magic()

async function fetchAsync (url, callback) {
    let response = await fetch(url);
    let data = await response.json();
    callback(data)
}

const url = 'http://localhost:9000/weather'

const oof = document.getElementById('json').innerHTML


fetchAsync(url, ({weather,location}) => {
    replacementString = 'The weather in '+ 
    location.cityName + 
    ' is currently '+
    weather.currentWeather +
    ' and the Temp is ' +
    weather.temp +
    ' degrees outside.'
    document.getElementById('json').innerHTML = replacementString
    console.log(weather, location)
})

