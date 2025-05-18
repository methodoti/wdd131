// select the DOM elements for outpu
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const myname = document.querySelector("#myname");

// use the date object
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);
// lastModified.innerHTML = `<span>${oLastModif.getFullYear()}</span>`;
lastModified.innerHTML = `<span class="highlight">${document.lastModified}</span>`;

let omyname = "Marcelo Severo Patricio"
myname.innerHTML = `<span class="highlight">${omyname}`;