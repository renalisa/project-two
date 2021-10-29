// Get reference what you need
var button = document.querySelector("button");
var ul = document.querySelector("ul");

// Define what should happen
function toggle() {
  ul.classList.toggle("active");
}

// Wire up the event
button.addEventListener("click", toggle);
