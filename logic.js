// // document.getElementById('pandaButton').addEventListener('click', function() {
// //     // Store a value in localStorage to indicate that button 1 was clicked
// //     localStorage.setItem('pandaButton', 'true');
// //     // Redirect to button2.html
// //     window.location.href = 'shop.html';
// // });

// // document.getElementById('pandaButton').addEventListener('click', function() {
// //     // Retrieve the value from localStorage set by button1.html
// //     var button1Clicked = localStorage.getItem('pandaButton');
// //     // Do something based on whether button 1 was clicked
// //     var element = document.getElementById('pandaPic');
// //     if (button1Clicked === 'true') {
// //         element.style.opacity = '.7';
// //         // alert('Button 1 was clicked before!');
// //     } else {
// //         alert('Button 1 was not clicked before.');
// //     }
// // });
// const profile = document.querySelector('#profile');
// const title = document.querySelector('#Title');
// profile.addEventListener('click', () => {
//     profile.style.color = 'green';
//     console.log(title.style)
// })
// document.getElementById('#profile').addEventListener('click', function() {
//     var myElement = document.getElementById('#Title');
//         // myElement.style.opacity = 1 ; // Change opacity to 0.2 if it's currently 1
//         myElement.style.color = white;
//         console.log(myElement.style)
// });
function showPhoto() {
    var photoElement = document.getElementById("pandaPic");

    photoElement.style.visibility = "visible";
}
function changeStyleOnOtherPage() {
    localStorage.setItem('changeStyle', 'true');
}
