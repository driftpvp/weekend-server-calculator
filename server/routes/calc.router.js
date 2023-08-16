const express = require('express');
const calcRouter = express.Router();


let calcList = [];


calcRouter.get('/', (req, res) => {
    res.send(calcList);
    console.log('request for /calc was made', calcList);
})

calcRouter.post('/', (req, res) => {
    console.log('get a POST request.', req.body);

    let calculations = req.body
    let result;
    switch (calculations.operator) {
        case "+": result = calculations.firstNumber + calculations.secondNumber;
        break;
        case "-": result = calculations.firstNumber - calculations.secondNumber;
        break;
        case "*": result = calculations.firstNumber * calculations.secondNumber;
        break;
        case "/": result = calculations.firstNumber / calculations.secondNumber;
        break;
        default: console.log("Invalid");
        return;
    }
    calculations.result = result;

    calcList.push(calculations)
    res.sendStatus(201);
})


module.exports = calcRouter;