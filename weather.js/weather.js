var button = document.querySelector('.submit');
var inputcity = document.querySelector('.inputcity');

var city = document.querySelector('.name');
var temperature = document.querySelector('.temperature');
var weather = document.querySelector('.weather');

var day2 = document.querySelector('.day2');
var day2t = document.querySelector('.day2temperature');
var day2w = document.querySelector('.day2weather');

var day3 = document.querySelector('.day3');
var day3t = document.querySelector('.day3temperature');
var day3w = document.querySelector('.day3weather');

var day4 = document.querySelector('.day4');
var day4t = document.querySelector('.day4temperature');
var day4w = document.querySelector('.day4weather');

var day5 = document.querySelector('.day5');
var day5t = document.querySelector('.day5temperature');
var day5w = document.querySelector('.day5weather');




button.addEventListener('click', async function fetcher() {
    var response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputcity.value + '&units=metric&APPID=f7b2e4417287ec1a07110967f2048dcc');
    var variable = await response.json()
    console.log(variable)


    var nameReading1 = 'Today'
    var temperatureReading1 = variable['list'][0]['main']['temp']
    var weatherReading1 = variable['list'][0]['weather'][0]['description']

    city.innerHTML = nameReading1
    temperature.innerHTML = temperatureReading1 + ' celscius'
    weather.innerHTML = weatherReading1;

    var nameReading2 = 'Next Day'
    var temperatureReading2 = variable['list'][7]['main']['temp']
    var weatherReading2 = variable['list'][7]['weather'][0]['description']

    day2.innerHTML = nameReading2
    day2t.innerHTML = temperatureReading2
    day2w.innerHTML = weatherReading2;

    var nameReading3 = 'In 2 Days'
    var temperatureReading3 = variable['list'][15]['main']['temp']
    var weatherReading3 = variable['list'][15]['weather'][0]['description']

    day3.innerHTML = nameReading3
    day3t.innerHTML = temperatureReading3
    day3w.innerHTML = weatherReading3

    var nameReading4 = 'In 3 Days'
    var temperatureReading4 = variable['list'][23]['main']['temp']
    var weatherReading4 = variable['list'][23]['weather'][0]['description']

    day4.innerHTML = nameReading4
    day4t.innerHTML = temperatureReading4
    day4w.innerHTML = weatherReading4


    var nameReading5 = 'In 4 Days'
    var temperatureReading5 = variable['list'][31]['main']['temp']
    var weatherReading5 = variable['list'][31]['weather'][0]['description']

    day5.innerHTML = nameReading5
    day5t.innerHTML = temperatureReading5
    day5w.innerHTML = weatherReading5





}
)
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});




