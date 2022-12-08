const express = require('express')
const router = express.Router()
const cryptoController = require('../controllers/cryptoController')

router.get('/getCrypto' , cryptoController.getCrypto)


module.exports = router

