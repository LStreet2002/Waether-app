var button = document.querySelector('.submit');
var inputcity = document.querySelector('.inputcity');
var city = document.querySelector('.name');
var temperature = document.querySelector('.temperature');
var weather = document.querySelector('.weather');



button.addEventListener('click', async function fetcher() {
    var response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputcity.value + '&units=metric&APPID=f7b2e4417287ec1a07110967f2048dcc');
    var variable = await response.json()
    console.log(variable)


    var nameReading = variable['name']
    var temperatureReading = variable['main']['temp']
    var weatherReading = variable['weather'][0]['description']

    city.innerHTML = nameReading
    temperature.innerHTML = temperatureReading + 'celscius'
    weather.innerHTML = weatherReading
}
)




