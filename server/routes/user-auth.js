const express = require('express');
// const { get } = require('mongoose');
const home = require('../controllers/auth-controller')

const router = express.Router();

router.post("/", home)

// exports router()
module.exports = router;