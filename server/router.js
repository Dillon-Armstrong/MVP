const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/member', controllers.get.member);
router.get('/members', controllers.get.allMembers);
router.get('/bands', controllers.get.bands);
router.get('/gigs', controllers.get.gigs);

module.exports = { router }