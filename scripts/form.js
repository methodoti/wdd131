document.addEventListener('DOMContentLoaded', function () {
    // Feed ProductName
    // const productSelect = document.getElementById('productName');
    const productSelect = document.querySelector('select[name="productName"]');
    if (productSelect) { // if exist
        const products = [
            { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
            { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
            { id: "fc-2050", name: "power laces", averagerating: 4.7 },
            { id: "fs-1987", name: "time circuits", averagerating: 3.5 },            
            { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
        ];
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // get the form and manage the submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // remove if redirect is failing
            let count = localStorage.getItem('reviewCount');
            if (count === null) {
                count = 0;
            } else {
                count = parseInt(count);
            }
            count++;
            localStorage.setItem('reviewCount', count);
            // redirect to review.html
            window.location.href = 'review.html';
        });
    }

    // show counter on review.html
    if (window.location.pathname.includes('review.html')) {
        const count = localStorage.getItem('reviewCount') || '0';
        if (document.querySelector('main')) {
            const reviewCounter = document.createElement('p');
            reviewCounter.textContent = `Total Reviews Submitted: ${count}`;
            document.querySelector('main').appendChild(reviewCounter);
        }
    }

    // footer
    const year = document.querySelector("#currentyear");
    const lastModified = document.querySelector("#lastModified");
    const myname = document.querySelector("#myname");

    if (year && lastModified && myname) {
        const today = new Date();
        year.innerHTML = `<span>${today.getFullYear()}</span>`;

        let oLastModif = new Date(document.lastModified);
        lastModified.innerHTML = `<span class="highlight">${document.lastModified}</span>`;

        myname.innerHTML = `<span>Marcelo Severo Patricio</span>`;
    }
});