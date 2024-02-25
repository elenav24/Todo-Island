function changeOpacity() {
    var image = document.getElementById('panda');
    if (image.style.opacity === '0.0') {
        image.style.opacity = '1'; // Change opacity to 1 (fully opaque)
    } else {
        image.style.opacity = '1'; // Change opacity to 1 
    }
}

// Attach click event listener to the button
document.getElementById('pandaButton').addEventListener('click', changeOpacity);
