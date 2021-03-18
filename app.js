var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function (req, res) {
    res.send('Hola este es el puerto: ');
    console.log('desde el console')
});

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});