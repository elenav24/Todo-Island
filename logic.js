
var coins = 1000;
function showPanda() {
    if (coins >= 750){
        localStorage.setItem('pandaStyle', 'true');
        coins -= 750;
        document.getElementById('output').innerHTML = coins;
    }
}

function showDog() {
    localStorage.setItem('dogStyle', 'true');
}


document.getElementById('output').innerHTML = coins;

// Update the content of the output element with the JavaScript value
// outputElement.textContent = coins;
