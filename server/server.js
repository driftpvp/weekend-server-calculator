const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const calcRouter = require('./routes/calc.router')

app.use(express.json());
app.use(express.static('sever/public'));


app.listen(port, () => {
    console.log('listening on port', port);
})