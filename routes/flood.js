const express = require("express");
const router = express.Router();


const {flooddata} = require("../controllers/Flood")
const {getData} = require("../controllers/Weather")


router.get("/data", flooddata);
router.get("/weatherdata", getData);



module.exports = router;


