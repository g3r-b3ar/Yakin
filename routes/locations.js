const express = require('express')
const router = express.Router()
const locationsController = require('../controllers/locations')

router.get('/', locationsController.getLocations)

router.post('/createLocation', locationsController.createLocations)

// router.put('/markComplete', locationsController.markComplete)

// router.put('/markIncomplete', locationsController.markIncomplete)

// router.delete('/deleteTodo', locationsController.deleteTodo)

module.exports = router