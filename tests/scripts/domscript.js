document.title = "My website";
document.body.style.backgroundColor = "grey";

const username = "Marcelo Patricio";

const welcomemsg = document.getElementById("welcome-msg");

welcomemsg.textContent += username;

// To select an HTML element from the document using the querySelector method
const article = document.querySelector("article");

// To change the innerHTML property of an existing element
article.innerHTML = "innerHTML supports <strong>HTML</strong> tags. The textContent property does not.";

// To change the inline CSS style of an element
article.style.textAlign = "right";

// To change an attribute of an element
article.setAttribute("class", "active");


// To create an element.
const paragraph = document.createElement("p");
// To append an element with additional content or elements
article.appendChild(paragraph);
article.append(paragraph, "Hello Word Addition!");

// To remove an element from the document
// article.removeChild(paragraph); // remove the paragraph from the article
// article.remove(); // remove the article itself