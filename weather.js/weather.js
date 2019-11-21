var today = document.createElement("h1")

async function fetcher() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}salisbury,f7b2e4417287ec1a07110967f2048dcc');
    const variable = response.json();
}