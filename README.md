# WeatherApp 🌤️

A simple and responsive weather application that fetches **real-time weather data from a Weather API** and displays it in a clean and user-friendly interface.

The main purpose of this project was to understand how to **work with a third-party REST API, send user input to the API, receive JSON data, and dynamically display the response using JavaScript**.

---

## What This Project Does

The application allows the user to enter a location such as:

* Delhi, India
* London, UK
* New York, USA
* Toronto, Canada
* Paris, France

The entered location is sent to the Weather API, which returns the current weather information for that location.

The application then extracts the required information from the API response and displays it on the webpage.

---

## API Integration

The main part of this project is **API integration**.

The application uses **WeatherAPI** to fetch current weather information.

### API Endpoint

```text
https://api.weatherapi.com/v1/current.json
```

The request contains:

```text
key  → API authentication
q    → Location entered by the user
aqi  → Air quality information
```

Example request:

```text
https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Delhi,India&aqi=yes
```

### API Flow

```text
User enters location
        ↓
JavaScript captures the input
        ↓
Fetch request is sent to WeatherAPI
        ↓
WeatherAPI returns JSON response
        ↓
JavaScript reads the response
        ↓
Required weather data is extracted
        ↓
Data is displayed dynamically in the UI
```

---

## Weather Data Displayed

The application extracts and displays information such as:

* Current temperature
* Feels-like temperature
* Weather condition
* Weather icon
* Humidity
* Wind speed
* Visibility
* Atmospheric pressure
* UV index
* Last updated time
* City, region and country

---

## Technologies Used

* **HTML5** — Structure of the application
* **CSS3** — Styling and responsive UI
* **JavaScript** — API integration and dynamic DOM updates
* **Fetch API** — Sending requests to WeatherAPI
* **WeatherAPI** — Source of real-time weather data
* **Font Awesome** — Icons

---

## Project Structure

```text
weatherApp/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Priyanshuprajapati-038/weatherApp.git
```

### 2. Open the project

```bash
cd weatherApp
```

### 3. Add your WeatherAPI key

Open `script.js` and add your own API key:

```javascript
const API_KEY = "YOUR_API_KEY";
```

You can get an API key from [WeatherAPI](https://www.weatherapi.com/).

### 4. Run the application

Open `index.html` using VS Code **Live Server**.

```text
Right Click index.html
        ↓
Open with Live Server
```

---

## Example

If the user enters:

```text
Delhi, India
```

JavaScript creates a request similar to:

```text
?q=Delhi,India
```

WeatherAPI returns the weather data, and JavaScript updates the UI with the returned information.

The same application can be used for locations around the world, for example:

```text
London, UK
New York, USA
Toronto, Canada
Paris, France
Tokyo, Japan
```

---

## Key Learning

The main learning from this project was **working with external APIs**.

Through this project, I practiced:

* Making HTTP requests using JavaScript
* Using `fetch()`
* Working with `async/await`
* Handling JSON responses
* Extracting nested data from API responses
* Updating webpage content dynamically
* Handling API errors
* Working with user input
* Building a responsive frontend around API data

---

## Future Improvements

* Add a 5-day weather forecast
* Add hourly weather data
* Add current-location detection
* Add Celsius/Fahrenheit conversion
* Add weather-based backgrounds
* Add air quality details
* Add search history

---

## Author

**Priyanshu Prajapati**

GitHub: [Priyanshu Prajapati](https://github.com/Priyanshuprajapati-038)

---

## ⭐ Project

If you find this project useful, feel free to star the repository.
