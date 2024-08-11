const express = require("express");
const router = express.Router();


const {flooddata} = require("../controllers/Flood")
const {getData, fetchFloodProbability, fetchwaterdischarge} = require("../controllers/Weather")


router.get("/data", flooddata);
router.get("/weatherdata", getData);
router.get("/flooddata", fetchFloodProbability);
router.get("/riverdata", fetchwaterdischarge);



module.exports = router;


