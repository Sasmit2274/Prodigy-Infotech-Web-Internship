const apiKey = "653e6b1f93684c398788553e82f36d33"; 

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");
  const error = document.getElementById("error");

  weatherInfo.innerHTML = "";
  error.innerText = "";

  if (!city) {
    error.innerText = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        error.innerText = "City not found. Try again.";
      } else if (response.status === 401) {
        error.innerText = "Invalid API key. Please check your key.";
      } else {
        error.innerText = "Something went wrong. Try again later.";
      }
      return;
    }

    const data = await response.json();
    const { name, main, weather } = data;

    weatherInfo.innerHTML = `
      <p><strong>City:</strong> ${name}</p>
      <p><strong>Temperature:</strong> ${main.temp} °C</p>
      <p><strong>Condition:</strong> ${weather[0].description}</p>
    `;
  } catch (err) {
    error.innerText = "Network error. Please check your connection.";
  }
}

