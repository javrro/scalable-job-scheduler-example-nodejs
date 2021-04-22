const express = require('express');
const app = express();
const consumer = require('./kafka/consumer');
const scheduler = require('./scheduler/scheduler');

consumer(scheduler);


app.listen(3000, ()=>{
    console.log("app listening on port 3000");
});