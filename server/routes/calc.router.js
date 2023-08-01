const express = require('express');
const calcRouter = express.Router();

let calc = [
    {
        integerOne: 1,
        integerTwo: 2
    }
];

calcRouter.get('/', (req, res) => {
    res.send(calc);
    console.log(calc);
})


module.exports = calcRouter;