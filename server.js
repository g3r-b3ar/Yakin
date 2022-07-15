const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const paddlingSpots = {
	'san marcos river': {
		id: 0001,
		locationName: 'San Marcos River',
		city: 'San Marcos',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Beginner',
		rating: '4 stars',
	},
	'blanco river': {
		id: 0002,
		locationName: 'Blanco River',
		city: 'Blanco',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Advanced Beginner',
		rating: '4 stars',
	},
	'comal river': {
		id: 0003,
		locationName: 'Comal River',
		city: 'New Braunfels',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Advanced Beginner',
		rating: '4 stars',
	},
	'frio river': {
		id: 0004,
		locationName: 'Frio River',
		city: 'Leakey',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Competent',
		rating: '4 stars',
	},
	'canyon lake': {
		id: 0005,
		locationName: 'Canyon Lake',
		city: 'Canyon Lake',
		state: 'Texas',
		bodyWaterType: 'Lake',
		difficulty: 'Beginner',
		rating: '3 stars',
	},
	'rio vista whitewater park': {
		id: 0006,
		locationName: 'Rio Vista Whitewater Park',
		city: 'San Marcos',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Proficient',
		rating: '5 stars',
	},
	'mission reach paddling trail': {
		id: 0007,
		locationName: 'Mission Reach Paddling Trail',
		city: 'San Antonio',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Beginner',
		rating: '5 stars',
	},
	'saspamco paddling trail': {
		id: '0008',
		locationName: 'Mission Reach Paddling Trail',
		city: 'San Antonio',
		state: 'Texas',
		bodyWaterType: 'River',
		difficulty: 'Beginner',
		rating: '2 stars',
	},
	defaultError: {
		id: '0000',
		locationName: 'This Location Caused an Error',
		city: 'NA',
		state: 'NA',
		bodyWaterType: 'NA',
		difficulty: 'NA',
		rating: 'NA',
	},
}

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/api/:locationName', (req, res) => {
	const locationName = req.params.locationName.toLowerCase()
	if (paddlingSpots[locationName]) {
		res.json(paddlingSpots[locationName])
	} else {
		res.json(paddlingSpots['defaultError'])
	}
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on ${PORT}! You better go catch it!`)
})
