let number = 0;
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let increment = document.getElementById("increment");

function updateUI() {
    document.getElementById("NumberCount").textContent = number;
}

// for first time
updateUI();

decrement.onclick = function() {
    number--;
    console.log("Decrement clicked");
    updateUI();
}

increment.onclick = function() {
    number++;
    console.log("Increment clicked");
    updateUI();
}

reset.onclick = function() {
    number = 0;
    console.log("Reset clicked");
    updateUI();
}