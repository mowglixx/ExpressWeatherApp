// Client Side Java script!!!
console.log('Client Side Javascript Loaded')

async function fetchAsync (url, callback) {
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data)
    callback(data)
}

//const oof = document.getElementById('json')


fetch('/weather/Manchester').then((response) => {
    response.json().then(({weather,location}) => {
        replacementString = 'The weather in '+ 
        location.town + 
        ' is currently '+
        weather.currently +
        ' and the Temp is ' +
        weather.temp +
        ' degrees outside.'
        document.getElementById('json').innerHTML = replacementString
        //console.log(weather, location)
    })
})