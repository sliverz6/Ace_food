const express = require('express');

const mainController = require('../controller/main');

const router = express.Router();

router.get('/list', mainController.getFoods);

router.get('/add-food', mainController.getAddFood);

router.post('/add-food', mainController.postAddFood);

router.get('/', mainController.getIndex);

module.exports = router;