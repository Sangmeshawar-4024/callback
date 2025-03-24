const express = require('express');

const app = express();

const port = 3002;

const ab0 = function (req, res,next){
    console.log('AB0 middleware executed');
    next();
}

const ab1 = function (req, res,next){
    console.log('AB1 middleware executed');
    next();
}

const ab2 = function (req, res){
    res.json("Hello from C.A Sangu")
}

app.get('/home/c',[ab0,ab1,ab2])

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})