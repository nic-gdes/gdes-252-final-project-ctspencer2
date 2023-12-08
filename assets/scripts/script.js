document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger-menu');
    var navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

function fahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('input-value').value);
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('result').innerText = celsius.toFixed(2) + ' °C';
}

function feetToMiles() {
    const feet = parseFloat(document.getElementById('input-value').value);
    const miles = feet / 5280;
    document.getElementById('result').innerText = miles.toFixed(2) + ' miles';
}

function inchesToCentimeters() {
    const inches = parseFloat(document.getElementById('input-value').value);
    const centimeters = inches * 2.54;
    document.getElementById('result').innerText = centimeters.toFixed(2) + ' cm';
}
