// client side code
// alert('Working')
var map = L.map('map').setView([29.8906, -97.9115], 9);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);