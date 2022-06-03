const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there! this lalit')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/test-api1', function (req, res) {

    res.send("tested api string");
});
router.get('/test-api-json', function (req, res) {

    res.send({id:56,name:"bhavesh",age:25});
});
router.post('/test-post', function (req, res) {

    res.send({id:56,name:"bhavesh",age:25});
});
router.post('/test-post1', function (req, res) {

    res.send({id:56,name:"bhavesh",age:25,status:true});
});
router.post('/test-post2', function (req, res) {
    console.log(req.body);
    res.send({id:56,name:"bhavesh",age:25,status:true});
});
router.post('/test-post3', function (req, res) {
    let id=req.body.user;
    let pwd=req.body.pwd;
    console.log(id,pwd);
    res.send({id:56,name:"bhavesh",age:25,status:true});
});
router.post('/test-post4', function (req, res) {
    let arr=[12,"finctionup"];
    let ele=req.body.element;
    arr.push(ele)
    console.log(arr);
    res.send({id:56,name:"bhavesh",age:25,status:true});
});
module.exports = router;
// adding this comment for no reason