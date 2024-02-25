window.coin = 100000;
// window.coin = document.getElementById('output').innerHTML;
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
function showCat() {
    if (window.coin >= 600) {
        localStorage.setItem('catStyle', 'true');
        window.coin -= 600;
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}
function showDaisy() {
    if (window.coin >= 300) {
        localStorage.setItem('daisyStyle', 'true');
        window.coin -= 300;
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}
function showSunflower() {
    if (window.coin >= 350) {
        localStorage.setItem('sunflowerStyle', 'true');
        window.coin -= 350;
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}


document.getElementById('output').innerHTML = coins;

// Update the content of the output element with the JavaScript value
// outputElement.textContent = coins;
