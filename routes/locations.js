const express = require('express')
const router = express.Router()
const locationsController = require('../controllers/locations')

//for all locations
router.get('/', locationsController.getAllLocations)
router.get(' ', locationsController.getAllLocations)

//for specific location
router.get('/:id', locationsController.getOneLocation)

router.post('/createLocation', locationsController.createLocations)

// router.put('/markComplete', locationsController.markComplete)

// router.put('/markIncomplete', locationsController.markIncomplete)

// router.delete('/deleteTodo', locationsController.deleteTodo)

module.exports = router
