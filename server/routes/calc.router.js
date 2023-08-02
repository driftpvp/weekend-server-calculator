const express = require('express');
const calcRouter = express.Router();



calcRouter.get('/', (req, res) => {
    res.send(calc);
    console.log(calc);
})

calcRouter.post('/', (req, res) => {
    console.log('get a POST request.', req.body);

    let calculations = req.body
    calc.push(calculations)
    res.sendStatus(201);
})


module.exports = calcRouter;