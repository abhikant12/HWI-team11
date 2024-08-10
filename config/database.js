const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect(){
    mongoose
        .connect("mongodb://127.0.0.1:27017/abhi", {})
        .then(() => console.log("DB Connected"))
        .catch( (error) => {
            console.log("DB Connection Failed");
            console.error(error.message);
            process.exit(1);
         });
}

module.exports = dbConnect;