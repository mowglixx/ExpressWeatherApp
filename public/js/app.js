// Client Side Java script!!!
console.log('Client Side Javascript Loaded')

const toTitleCase = (string) => {
    return string.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      }
    )
  }

  fetch('/weather/Manchester').then((response) => {

    response.json().then(({error = {}, weather, location}) => {

        if(error.message) {

            replacementString = 'Error: ' + error.message

            console.error('Error Data: %o', error)

        }
        else if(weather) {
            
            replacementString = 'The weather in '+ 
            toTitleCase(location.town) + 
            ' is currently '+
            weather.currently +
            ' and the Temp is ' +
            weather.temp +
            ' degrees outside.'

            console.log('Location Data: %o', location)
            console.log('Weather Data: %o', weather)
            
        }
        document.getElementById('json').innerHTML = replacementString
    })
})

const weatherForm = document.querySelector('form')
const searchBox = document.querySelector('input#locationSearch')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    weatherData = '/weather/'+ searchBox.value

    fetch(weatherData).then((response) => {

        response.json().then(({error = {}, weather, location}) => {
    
            if(error.message) {
    
                replacementString = 'Error: ' + error.message
    
                console.error('Error Data: %o', error)
    
            }
            else if(weather) {
                
                replacementString = 'The weather in '+ 
                toTitleCase(location.town) + 
                ' is currently '+
                weather.currently +
                ' and the Temp is ' +
                weather.temp +
                ' degrees outside.'
    
                console.log('Location Data: %o', location)
                console.log('Weather Data: %o', weather)
                
            }
            document.getElementById('json').innerHTML = replacementString
        })
    })

})