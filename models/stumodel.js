const mongoose = require("mongoose");

const stuschema= mongoose.Schema({
    "rollno":String,
    "name":String,
    "city":String,
    "fees":String
})

module.exports= mongoose.model("student",stuschema)

