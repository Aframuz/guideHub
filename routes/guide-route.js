const express = require('express')
const guideController = require('../controllers/guide-controller')

const router = express.Router()

router.route('/').get(guideController.getGuides)

module.exports = router