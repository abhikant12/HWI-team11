const express = require("express");
const cors = require("cors");

const dbConnect = require("./config/database");

const floodroute = require("./routes/flood");

require("dotenv").config();

const app = express();
const PORT = 4000 || process.env.PORT;


/** middlewares */
app.use(
  cors()                                                     
);
app.use(express.json());


// Routes
app.use("/api/v1/floodprobaility", floodroute);



dbConnect();

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

