const express = require('express');
const logger = require('./logger/logger.js');
const helper = require('./utill/helper.js');
const formator = require('./validator/formatter.js');
const lodash = require('lodash');

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

router.get('./candidate', function (req, res) {
    const candidate = {
        name: "shusant",
        age: 18,
        number: 777864568,
        languages: "javascript"
    }
    res.send('sdjijksha');
});

router.get('/hello', function (req, res) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const chunk = lodash.chunk(month, 4);
    console.log(chunk);

    const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const tails = lodash.tail(oddNum);
    console.log(tails);

    const movies1 = [["thriler", "Inception"], ["action", "Avengers"], ["fantasy", "Harry Potter"]];
    const movies2 = [["horror", "It"], ["adventure", "Interstaller"]];
    let union = lodash.union(movies1, movies2);
    console.log(union);
    const Frompairs=lodash.fromPairs(union);
    console.log(Frompairs);
    res.send("this assingment countain Chunks and Tails")
});

module.exports = router;
// adding this comment for no reason