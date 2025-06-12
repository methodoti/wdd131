document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('#menu');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        nav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
});



/* getdates.js */
// select the DOM elements for outpu
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);
lastModified.innerHTML = `<span class="highlight">${document.lastModified}</span>`;

const myname = document.querySelector("#myname");
myname.innerHTML = `<span>Marcelo Severo Patricio</span>`;


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Brasilia Brazil",
        location: "Brasilia, Brazil",
        dedicated: "2023, September, 17",
        area: 25000,
        imageUrl: "images/brasilia-brazil-temple.webp"
    },
    {
        templeName: "Sao Paulo Brazil",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
            "images/sao-paulo-brazil-temple.webp"
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
            "images/porto-alegre-brazil-temple.webp"
    }
];
  
// Function to display temple cards
function displayTemples(templeList) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    templeList.forEach(temple => {
        const figure = document.createElement('figure');
        figure.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            </figcaption>
        `;
        gallery.appendChild(figure);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples); 
});

// Filter functions
function filterTemples(criterion) {
    let filteredTemples = temples;
    if (criterion === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900, January, 1'));
    } else if (criterion === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000, December, 31'));
    } else if (criterion === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (criterion === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }
    displayTemples(filteredTemples); 
}

// Event listeners for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const criterion = e.target.id; 
        document.querySelector('h2').textContent = e.target.textContent;
        filterTemples(criterion);
    });
});