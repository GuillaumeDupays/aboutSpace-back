const mongoose = require('mongoose')

// a Schema to have a model of data like sql databases, front app must have a correct object
const pictureElementsSchema = new mongoose.Schema({
	nasaId: String,
	title: String,
	urlImage: String,
	keywords: Array,
})

module.exports = mongoose.model('PictureElements', pictureElementsSchema)
