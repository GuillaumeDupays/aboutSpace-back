const Picture = require('../models/picture')

exports.createPicture = (req, res, next) => {
	const picture = new Picture(req.body)
	picture
		.save()
		.then(() =>
			res.status(201).json({ message: 'Picture and his informations created' })
		)
		.catch((err) => res.status(400).json({ err }))
}

exports.getAllPictures = (req, res, next) => {
	Picture.find()
		.then((pictures) => res.status(200).json(pictures))
		.catch((err) => res.status(400).json({ err }))
}
