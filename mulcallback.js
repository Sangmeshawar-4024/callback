const express = require('express');

const app = express();

const port = 3001;

app.get('/home/a',(req,res,next)=>{
    console.log('A request received on /home/a');
    next();
},(req,res)=>{
    res.send('Home page A');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})