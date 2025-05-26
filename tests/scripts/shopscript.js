// Variables from Part 2
const list = document.querySelector("ul");
const input = document.querySelector("#item");
const button = document.querySelector("button");

// Step 3: Function to handle button click
function addItem() {
    // Step 4: Get the input value
    const itemValue = input.value;

    // Step 5: Clear the input field
    input.value = "";

    // Extension: Check if input is not empty or juist whitespace
    if (itemValue.trim() !== "") {
        // Step 6: Create three new elements and store them in variables
        const listItem = document.createElement("li"); // Create <li> element
        const listText = document.createElement("span"); // Create <span> element
        const listBtn = document.createElement("button"); // Create <button> element
        // console.log(listItem, listText, listBtn); // just for testing

        // Step 7: Append <span> and <button> to the <li>
        listItem.appendChild(listText);
        listItem.appendChild(listBtn);

        // Step 8: Set text content for <span> and <button>
        listText.textContent = itemValue; // Set <span> to input value
        listBtn.textContent = "Delete"; // Set <button> to "Delete"
        // console.log(listItem); //just for testing

        // Step 9: Append <li> to the <ul>
        list.appendChild(listItem);

        // Step 10: Add event listener to delete button
        listBtn.addEventListener("click", () => {
            list.removeChild(listItem);
        });
    } // end of empty input check
    
    // Step 11: Focus the input field
    input.focus();
}

// Attach the function to the button's click event
button.addEventListener("click", addItem);