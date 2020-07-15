import { country, state, city } from "./src/location.js";
import { weather } from "./src/weather.js";

const currentWeather = weather();

document.getElementById("app").innerHTML = 
"<h1>" + country +  " | " + state + " | " + city +  "</h1>" + 
"<h2>Weather " + currentWeather + "</h2>";
