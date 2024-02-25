
window.coin = 10000;
//document.getElementById('output').innerHTML = window.coin;
function showPanda() {
    if (window.coin >= 750){
        localStorage.setItem('pandaStyle', 'true');
        window.coin -= 750;
        console.log(coins);
        document.getElementById('output').innerHTML = coins;
    }
}

function showDog() {
    localStorage.setItem('dogStyle', 'true');
    if (window.coin >= 500) {
        console.log(coins);
        window.coin -= 750;
        document.getElementById('output').innerHTML = coins;
    }
}


document.getElementById('output').innerHTML = coins;

// Update the content of the output element with the JavaScript value
// outputElement.textContent = coins;
