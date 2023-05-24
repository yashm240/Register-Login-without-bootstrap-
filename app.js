const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/',require('./api/routes/routes'));
const server = app.listen(4000,err=>{
    if(err){
        console.log("some error occured ");
    }else{
        console.log("server started at "+server.address().port)
    }
})