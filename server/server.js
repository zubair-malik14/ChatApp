const path=require('path');
const express = require('express');
const Publicpath=path.join(__dirname,"/../public");
var port= process.env.port || 3000;
var app= express();

app.use(express.static(Publicpath));

app.listen(port,()=>{
console.log(`server is up on the port ${port}`);
})


