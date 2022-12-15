const express = require('express')

const { test } = require('../Controllers/get')
const router = express.Router()

router.get('/get', test)

module.exports = router