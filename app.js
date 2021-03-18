const express = require('express');
const msyql = require('mysql')
const myconn = require('express-myconnection')
const port = process.env.PORT || 3000;
const app = express();

const dbOptions = {
    host:'freedb.tech',
    user: 'freedbtech_rigoalag',
    password: 'martin51',
    database: 'freedbtech_apitest'
}

app.get('/', function (req, res) {
    res.send('Prueba de imports y dboptions');
    console.log('desde el console')
});

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});