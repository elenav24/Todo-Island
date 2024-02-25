function showPhoto() {
    var photoElement = document.getElementById("pandaPic");

    photoElement.style.visibility = "visible";
}
function changeStyleOnOtherPage() {
    localStorage.setItem('changeStyle', 'true');
}
