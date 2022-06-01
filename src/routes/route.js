const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api! and which is modified by lalit')
});

module.exports = router;
// adding this comment for no reason