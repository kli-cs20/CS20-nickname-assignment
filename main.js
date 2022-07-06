// Nickname Generater Assignment

// Variables for HTML Elements
let firstNameEl = document.getElementById("first-name");
let lastNameEl = document.getElementById("last-name");
let randNameBtn = document.getElementById("randName");
let generateAllBtn = document.getElementById("allNames")
let resultEl = document.getElementById("results");

// Basic Array
let nicknames = ["'The Genius'", "'The Slob'", "'The Hero'", "'The Tyrant'", "'Hates Nicknames'", "'The Rock'", "'Loves Food'", "'The Flash'", "'The Coder'", "'Bird Lover'", "'Tree Hugger'", "'The Maniac'"];

// Event Listener / Generate Nickname Function
randNameBtn.addEventListener("click", generateName);

function generateName() {
    // Update User Input
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let i = Math.floor(Math.random() * nicknames.length);

    resultEl.innerHTML = `<p>${firstName} ${nicknames[i]} ${lastName}</p>`;
}

// Traverse Array and Print all possible nicknames
generateAllBtn.addEventListener("click", printNicknames);

function printNicknames() {
    // Update User Input
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let outputStr = "";
    for (let i = 0; i < nicknames.length; i++) {
        outputStr += `<p>${firstName} ${nicknames[i]} ${lastName}</p>`;
    }
    resultEl.innerHTML = outputStr;
}
