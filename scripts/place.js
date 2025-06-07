// Select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#windChill"); // Adicione este ID no HTML para o wind chill

// Use the Date object
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);

// Set the current year
year.innerHTML = `<span>${today.getFullYear()}</span>`;

// Set the last modified date with proper formatting
lastModified.innerHTML = `<span class="highlight">${new Date(document.lastModified).toLocaleDateString('en-US', options)}</span>`;

// Calculate wind chill (static values: T = 15°C, V = 10 km/h)
const temperature = 15; // °C
const windSpeed = 10;   // km/h
const windChillValue = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.innerHTML = `<span>${windChillValue.toFixed(2)}°C</span>`;
} else {
    windChill.innerHTML = `<span>N/A</span>`;
}