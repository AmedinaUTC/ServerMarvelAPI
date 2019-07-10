//Librerías
const express = require('express');
const controller = require('./characters.controller');

const router = express.Router();

//Mapeo del request GET - Corresponde a api/characters/
router.get('/', controller.get);

module.exports = router;
