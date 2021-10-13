const express = require('express')
const router = express.Router()
const Picture = require('../models/picture')

router.get('/pong', (req, res) => {
	res.status(200).json({ message: 'pong', date: new Date() })
})

module.exports = router
