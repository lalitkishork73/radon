const express = require('express');
const router = express.Router();
const CowinController = require("../controller/cowin")
const weather = require("../controller/weather")
const Memes = require("../controller/memes")

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
// Axios POST request assignment
// Cowin===> 1
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/districtsInState", CowinController.getByDistricts)
router.get("/cowin/getByPin", CowinController.getByPin) 
router.post("/cowin/getOtp", CowinController.getOtp)


//  Weather===> 2
router.get("/getWeather", weather.getWeather)
router.get("/getSortedCities", weather.getSortedCities)

// Memes ===> 3
router.post("/createMeme", Memes.Memes)

module.exports = router;