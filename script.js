const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");
const weatherIcon = document.getElementById("weatherIcon");

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const visibility = document.getElementById("visibility");

const pressure = document.getElementById("pressure");
const uvIndex = document.getElementById("uvIndex");
const lastUpdated = document.getElementById("lastUpdated");

const errorMessage = document.getElementById("errorMessage");


// Your WeatherAPI key
// use own api 

const API_KEY = "YOUR_API_KEY";

// Function to get weather
async function getWeather(location) {

    try {

        errorMessage.textContent = "Loading...";


        // Weather API URL
        const url =
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=yes`;


        console.log("Fetching:", url);


        const response = await fetch(url);


        const data = await response.json();


        console.log("Weather Data:", data);


        // Check for API errors
        if (!response.ok || data.error) {

            errorMessage.textContent =
                data.error?.message || "Unable to get weather data.";

            return;
        }


        // Clear error message
        errorMessage.textContent = "";


        // Location information
        cityName.textContent = data.location.name;

        country.textContent =
            `${data.location.region}, ${data.location.country}`;


        // Temperature
        temperature.textContent =
            `${data.current.temp_c}°C`;


        // Weather condition
        weatherCondition.textContent =
            data.current.condition.text;


        // Weather icon
        weatherIcon.src =
            `https:${data.current.condition.icon}`;


        // Feels like temperature
        feelsLike.textContent =
            `${data.current.feelslike_c}°C`;


        // Humidity
        humidity.textContent =
            `${data.current.humidity}%`;


        // Wind speed
        windSpeed.textContent =
            `${data.current.wind_kph} km/h`;


        // Visibility
        visibility.textContent =
            `${data.current.vis_km} km`;


        // Pressure
        pressure.textContent =
            `${data.current.pressure_mb} mb`;


        // UV Index
        uvIndex.textContent =
            data.current.uv;


        // Last updated
        lastUpdated.textContent =
            data.current.last_updated;

    }

    catch (error) {

        console.error("Error:", error);

        errorMessage.textContent =
            "Something went wrong: " + error.message;

    }

}


// Search button
searchBtn.addEventListener("click", function () {

    const location = cityInput.value.trim();


    if (location === "") {

        errorMessage.textContent =
            "Please enter a city or city and country.";

        return;
    }


    getWeather(location);

});


// Search when Enter key is pressed
cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const location = cityInput.value.trim();


        if (location === "") {

            errorMessage.textContent =
                "Please enter a city or city and country.";

            return;
        }


        getWeather(location);

    }

});


// Default weather when website loads
getWeather("Delhi, India");