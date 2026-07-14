let button = document.getElementById("randomizer");
let dice1 = document.getElementById("dice1Number");
let dice2 = document.getElementById("dice2Number");
let dice3 = document.getElementById("dice3Number");


function randomNumberGenerate() {
    return Math.floor(Math.random()*6) + 1;
}

button.onclick = function() {
    dice1.textContent = randomNumberGenerate();
    dice2.textContent = randomNumberGenerate();
    dice3.textContent = randomNumberGenerate();
}