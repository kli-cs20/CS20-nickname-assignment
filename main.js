// Nickname Generater Assignment

// Variables for HTML Elements
let firstNameEl = document.getElementById("first-name");
let lastNameEl = document.getElementById("last-name");
let randNameBtn = document.getElementById("randName");
let generateAllBtn = document.getElementById("allNames")
let resultEl = document.getElementById("results");

// Basic Array
let nicknames = ["'The Genius'", "'The Slob'", "'The Hero'", "'The Tyrant'", "'Hates Nicknames'", "'The Rock'", "'Loves Food'"];

// Event Listener / Main Function
randNameBtn.addEventListener("click", generateName);

function generateName() {
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let i = Math.floor(Math.random() * nicknames.length);

    resultEl.innerHTML = `<p>${firstName} ${nicknames[i]} ${lastName}</p>`;
}
