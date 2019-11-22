var button = document.querySelector('.submit');
var inputcity = document.querySelector('.inputcity');
var city = document.querySelector('.name');
var temperature = document.querySelector('.temperature');
var weather = document.querySelector('.weather');

var day2 = document.querySelector('.day2');
var day2t = document.querySelector('.day2temperature');
var day2w = document.querySelector('.day2weather');


button.addEventListener('click', async function fetcher() {
    var response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputcity.value + '&units=metric&APPID=f7b2e4417287ec1a07110967f2048dcc');
    var variable = await response.json()
    console.log(variable)


    var nameReading1 = 'Now'
    var temperatureReading1 = variable['list'][0]['main']['temp']
    var weatherReading1 = variable['list'][0]['weather'][0]['description']

    city.innerHTML = nameReading1
    temperature.innerHTML = temperatureReading1 + ' celscius'
    weather.innerHTML = weatherReading1;

    var nameReading2 = 'Tomorrow'
    var temperatureReading2 = variable['list'][7]['main']['temp']
    var weatherReading2 = variable['list'][7]['weather'][0]['description']

    day2.innerHTML = nameReading2
    day2t.innerHTML = temperatureReading2
    day2w.innerHTML = weatherReading2


}
)




