
window.coin = 10000;
//document.getElementById('output').innerHTML = window.coin;
function showPanda() {
    if (window.coin >= 750){
        localStorage.setItem('pandaStyle', 'true');
        window.coin -= 750;
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}

function showDog() {
    if (window.coin >= 500) {
        localStorage.setItem('dogStyle', 'true');
        window.coin -= 500;
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}


document.getElementById('output').innerHTML = coins;

// Update the content of the output element with the JavaScript value
// outputElement.textContent = coins;
