
window.coin = 10000;
//document.getElementById('output').innerHTML = window.coin;
function showPanda() {
    if (coins >= 750){
        localStorage.setItem('pandaStyle', 'true');
        coins -= 750;
        console.log(coins);
        coins = 200;
        document.getElementById('output').innerHTML = coins;
        coin += 2000;
    }
}

function showDog() {
    localStorage.setItem('dogStyle', 'true');
}


document.getElementById('output').innerHTML = coins;

// Update the content of the output element with the JavaScript value
// outputElement.textContent = coins;
