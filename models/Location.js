const mongoose = require('mongoose')

const LocationSchema = new mongoose.Schema({
  locationName: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  bodyWaterType: {
    type: String,
    required: false,
  },
  difficulty: {
    type: String,
    required: false,
  },
  rating: {
    type: Boolean,
    required: false,
  }
})

module.exports = mongoose.model('Location', LocationSchema)
