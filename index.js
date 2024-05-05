function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = `171af21184a192ff7b313c9de112b5fb`; // Replace 'YOUR_API_KEY' with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            
            // Change background image based on weather condition
            changeBackgroundImage(data.weather[0].main);
        }) 
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}

function changeBackgroundImage(weatherCondition) {
    const body = document.body;

    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            body.style.backgroundImage = "url('clear.png')";
            break;
        case 'haze':
            body.style.backgroundImage = "url('cloudy.png')";
            break; 
        case 'scattered clouds':
            body.style.backgroundImage="url('cloudy.png')"; 
            break;
        case 'rain':
            body.style.backgroundImage = "url('rainy.png')";
            break; 
        case 'few clouds':
            body.style.backgroundImage="url('cloudy.png')"; 
            break;
        default:
            body.style.backgroundImage = "url('clear.png')";
    }
}
