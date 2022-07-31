const Location = require('../models/Location')

module.exports = {
    getAllLocations: async (req, res) => {
        try {
            const locationItems = await Location.find()
            const locationCount = await Location.countDocuments()

            res.render('locations.ejs', {
                places: locationItems,
                mapped: locationCount
            })
        } catch (err) {
            console.log(err)
        }
    },
    getOneLocation: async (req, res) => {
        try {
            const locationItem = await Location.findById(req.params.id)

            res.render('location.ejs', { places: locationItem })
        } catch (err) {
            console.log(err)
        }
    },
    createLocations: async (req, res) => {
        try {
            await Location.create({
                locationName: req.body.locationItemName,
                lat: req.body.locationItemLat,
                long: req.body.locationItemLong,
                city: req.body.locationItemCity,
                state: req.body.locationItemState
            })
            console.log('Location has been added!')
            res.redirect('/locations')
        } catch (err) {
            console.log(err)
        }
    },
    markComplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate(
                { _id: req.body.todoIdFromJSFile },
                {
                    completed: true
                }
            )
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (err) {
            console.log(err)
        }
    },
    markIncomplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate(
                { _id: req.body.todoIdFromJSFile },
                {
                    completed: false
                }
            )
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch (err) {
            console.log(err)
        }
    },
    deleteTodo: async (req, res) => {
        console.log(req.body.todoIdFromJSFile)
        try {
            await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile })
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}
