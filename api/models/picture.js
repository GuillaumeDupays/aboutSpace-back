const mongoose = require('mongoose')

const pictureElementsSchema = new mongoose.Schema({
	nasaId: String,
	title: String,
	urlImage: String,
	keywords: Array,
})

module.exports = mongoose.model('PictureElements', pictureElementsSchema)
