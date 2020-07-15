import { country, state, city } from "./src/location.js";
import { weather } from "./src/weather.js";

const getWeather = weather();
const currentWeather = "<h2>Weather " + getWeather + "</h2>";
const currentLocation = "<h1>" + country +  " | " + state + " | " + city +  "</h1>";
document.getElementById("app").innerHTML = currentLocation + currentWeather;