const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/bands', controllers.get.bands);
router.get('/gigs', controllers.get.gigs);

module.exports = { router }