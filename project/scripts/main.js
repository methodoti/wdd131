// -------------------- Common Scripts for All Pages --------------------

// --- Hamburger Menu Toggle ---
const menuButton = document.querySelector('#menu-btn');
const navigation = document.querySelector('.navigation');

if (menuButton) {
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
}


// --- Dynamic Footer Information ---
const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

if (currentYearSpan) {
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

if (lastModifiedSpan) {
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modification: ${lastModified}`;
}