const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Bookdb"  ).then(
    console.log("Connected Successfully")
)