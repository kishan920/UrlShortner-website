const express = require('express');

const urlController = require('../controllers/urlController')

const router = express.Router();

router.post('/url/shorten', urlController.createUrl)
router.get('/:code', urlController.getUrl) 

module.exports = router;
