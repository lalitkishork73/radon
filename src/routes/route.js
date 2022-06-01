const express = require('express');
const logger = require('./logger/logger.js');
const helper= require('./utill/helper.js');
const formator = require('./validator/formatter.js');

const router = express.Router();


router.get('/test-me1', function (req, res) {
    logger.wellcome();
    res.send('My second ever api! which is on logger')
});

router.get('/test-me2', function (req, res) {
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();
    res.send('My third api! which is on helper')
});

router.get('/test-me3', function (req, res) {
    formator.trim();
    formator.LowerCaseMethod();
    formator.UpperCaseMethod();
    res.send('My 4th api validator')
});


module.exports = router;
// adding this comment for no reason