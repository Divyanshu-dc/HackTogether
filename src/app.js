const express = require('express');

const app = express();

app.use((req,res) =>{
    res.send("hello");
})

app.listen(4444, ()=>{
    console.log("Server is running.......");
});