


const express = require('express');

const app = express();











app.get('/',(req,res)=>{
    res.send("<h1>Test page</h1>")
})

app.listen(4000);