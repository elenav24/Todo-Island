window.coin = 100000;
// window.coin = document.getElementById('output').innerHTML;
function showPanda() {
    if (window.coin >= 750){
        localStorage.setItem('pandaStyle', 'true');
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}
function showDog() {
    if (window.coin >= 500) {
        localStorage.setItem('dogStyle', 'true');
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}
function showCat() {
    if (window.coin >= 600) {
        localStorage.setItem('catStyle', 'true');
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}
function showDaisy() {
    if (window.coin >= 300) {
        localStorage.setItem('daisyStyle', 'true');
        console.log(coin);
        document.getElementById('output').innerHTML = coin;
    }
}
function showSunflower() {
    if (window.coin >= 350) {
        localStorage.setItem('sunflowerStyle', 'true');
        document.getElementById('output').innerHTML = coin;
        console.log(coin);
    }
}
function showMouse() {
    if (window.coin >= 450) {
        localStorage.setItem('mouseStyle', 'true');
        document.getElementById('output').innerHTML = coin;
        console.log(coin);
    }
}


document.getElementById('output').innerHTML = coins;

// Update the content of the output element with the JavaScript value
// outputElement.textContent = coins;
