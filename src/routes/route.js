const express = require('express');


const router = express.Router();


// Problem 1
router.get('/movies', function (req, res) {
    let movies = ["Missoin Impsssible", "Ironman", "Avengres", "Pirates Of The Caribian", "Captain America", "Interstaller", "Thor", "Harry Potter", "IT"];
    res.send(movies);
});

// Problem 2 & 3
router.get('/movies/:indexNumber', function (req, res) {
    let movies = ["Missoin Impsssible", "Ironman", "Avengres", "Pirates Of The Caribian", "Captain America", "Interstaller", "Thor", "Harry Potter", "IT"];
    let a = req.params.indexNumber;
    if (a < movies.length) {
        res.send(movies[a]);
    }
    else {
        res.send("invalid index");
    }
});

// Problem 4
router.get('/films', (req, res) => {
    let movies = [
        { id: 1, name: "Cabin in the Wood" },
        { id: 2, name: "Wolf of Wall Street" },
        { id: 3, name: "Catch Me If You Can" },
        { id: 4, name: "Train to Busan" },
        { id: 5, name: "Alive" }
    ];
    res.send(movies);

});

// Problem 5
router.get('/films/:filmid', (req, res) => {
    let movies = [
        { id: 1, name: "Dawn of the Dead" },
        { id: 2, name: "Shaun of the Dead" },
        { id: 3, name: "28 Weeks leter" },
        { id: 4, name: "Zombieland" },
        { id: 5, name: "Alive" }
    ];

    let fil = Number(req.params.filmid);
    let result = "---Invalid Input---";
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id == fil) {
            result = movies[i];
        }
    }
    res.send(result);
});


module.exports = router;
// adding this comment for no reason

/*
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

 router.get('/hello', function (req, res) {

    res.send('Hello there!')
});

router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
}) */










// done By Lalitkishor