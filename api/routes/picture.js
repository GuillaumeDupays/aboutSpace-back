const express = require('express')
const router = express.Router()

const pictureCtrl = require('../controleurs/picture')

router.post('/', pictureCtrl.createPicture)
router.get('/', pictureCtrl.getAllPictures)

module.exports = router
