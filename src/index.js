import './styles/main.css';

const apiKey = '38bec0f55837f761dea9a8f1cb3f670f';

// Event listener for the search button

function handleSearch() {
  const searchBtn = document.querySelector('#search-btn');

  searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city-name').value;

    handleFetchedData(cityName);
  });
}

async function handleFetchedData(cityName) {
  try {
    const weatherData = await getWeatherData(cityName);
    displayWeather(weatherData);
  } catch (error) {
    document.querySelector(
      '.display-weather'
    ).textContent = `Sever Error: ${error.message}`;
  }
}

async function getWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

  const response = await fetch(apiURL);
  if (!response.ok) throw new Error('Failed to fetch weather data.');

  const data = await response.json();
  return data;
}

function displayWeather(data) {
  const card = document.querySelector('.display-weather');
  card.textContent = '';

  const degree = document.createElement('p');
  degree.classList.add('display-degree');
  degree.textContent = `${data.main.temp}°C`;

  const city = document.createElement('p');
  city.classList.add('display-city');
  city.textContent = `${data.name}, ${data.sys.country}`;

  const info = document.createElement('p');
  info.classList.add('display-info');
  info.textContent = `${data.weather[0].description}`;

  const otherInfos = document.createElement('div');
  otherInfos.classList.add('other-info-card');

  otherInfos.innerHTML = `
    <span>Feels Like: ${data.main.feels_like}°C</span>
     <span>Max Temperature: ${data.main.temp_max}°C</span>
    <span>Min Temperature: ${data.main.temp_min}°C</span>
    <span>Humidity: ${data.main.humidity}</span>
    <span>Wind Speed: ${data.wind.speed}</span>
  `;

  card.append(degree, city, info, otherInfos);
}

document.addEventListener('DOMContentLoaded', () => {
  handleFetchedData('London'); //default on load
  handleSearch(); //listen for search
});
