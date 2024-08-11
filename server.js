const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const dbConnect = require("./config/database");

const floodroute = require("./routes/flood");
const userRoutes = require('./routes/users');
const aichatroute = require('./routes/aichat');


require("dotenv").config();

const app = express();
const PORT = 4000 || process.env.PORT;


/** middlewares */
app.use(
  cors()                                                     
);
app.use(express.json());
app.use(bodyParser.json());


// Routes
app.use("/api/v1/floodprobaility", floodroute);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/aichat', aichatroute);

dbConnect();

app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

