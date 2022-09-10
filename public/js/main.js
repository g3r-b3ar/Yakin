//Creating a leaflet map object set to San Marcos
var map = L.map('map').setView([29.8906, -97.9115], 9)

//Using OpenStreetMap as a tile layer for the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map)

// Adding a marker to the map
let locations = [
    ['San Marcos River', 29.890661, -97.91153],
    ['Blanco River', 29.936802, -98.016701]
]

let locationsFromDB = []

for (let i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]])
        .bindPopup(locations[i][0])
        .addTo(map)
}

function onLocationFound(e) {
    var radius = e.accuracy

    L.marker(e.latlng).addTo(map).bindPopup('You are here').openPopup()

    L.circle(e.latlng, radius).addTo(map)
}
function onLocationError(e) {
    alert(e.message)
}

map.on('locationfound', onLocationFound)
map.on('locationerror', onLocationError)

map.locate({ setView: true, maxZoom: 10 })

// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }
