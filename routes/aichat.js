const express = require("express");
const router = express.Router();


const {generateFloodImpactReport} = require("../controllers/Aichat")


router.post("/chat", generateFloodImpactReport);


module.exports = router;


