const express = require('express');
const app = express();
const handler = require('./handler/handler');

handler();

app.listen(3000, ()=>{
    console.log("app listening on port 3000...");
});