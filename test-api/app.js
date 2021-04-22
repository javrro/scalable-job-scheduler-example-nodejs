const express = require('express');
const app = express();
const consumer = require('./kafka/consumer');
const producer = require('./kafka/producer');

let id = 0;

app.get('/', (req,res)=>{
    res.send("hello from test api");
});

app.post('/', (req,res)=>{
    producer(id);
    id++;
    res.send("recibido");
});

consumer();

app.listen('3000', ()=>{
    console.log("app listening on port 3000");
});