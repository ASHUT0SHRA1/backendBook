const express = require('express');
const app = express() ; 
const cors = require('cors')
require('./Connection/conn')
const path = require('path')
const postBookRouter = require('./routes/bookroute');

app.use(express.json());

app.use(cors())
app.use('/book', postBookRouter);


app.get("/", (req, res) => 
    { 
    res.send("Welcome to home page of book backend");
    app.use(express.static(path.resolve(__dirname, "frontend", "build"))); 
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1000, () =>{
    console.log("Server Started Successfully")
})

