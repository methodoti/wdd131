/* getdates.js */

// Select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#windChill");

// Use the Date object
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

// Set the current year
year.innerHTML = `<span>${today.getFullYear()}</span>`;

// Set the last modified date with proper formatting
lastModified.innerHTML = `<span class="highlight">${new Date(document.lastModified).toLocaleDateString('en-US', options)}</span>`;

// Define the calculateWindChill function with a single line
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

// Static values and wind chill calculation
const temperature = 15; // °C
const windSpeed = 10;   // km/h

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.innerHTML = `<span>${calculateWindChill(temperature, windSpeed).toFixed(2)}°C</span>`;
} else {
    windChill.innerHTML = `<span>N/A</span>`;
}