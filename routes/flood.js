const express = require("express");
const router = express.Router();


const {flooddata} = require("../controllers/Flood")


router.get("/data", flooddata);



module.exports = router;


