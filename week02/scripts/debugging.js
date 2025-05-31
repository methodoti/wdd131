
// get elements from the document
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area'); // could use getElementById, but it works too.

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML = radius; // could use textContent but I want to show that innerHTML works.
areaOutput.innerHTML = area;