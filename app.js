const express = require('express');
const msyql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const port = process.env.PORT || 3000;
const app = express();

const dbOptions = {
    host:'freedb.tech',
    user: 'freedbtech_rigoalag',
    password: 'martin51',
    database: 'freedbtech_apitest'
}

//Middleware
app.use(myconn(msyql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.send('Prueba rutas');
    console.log('desde el console')
});

app.use('/api', routes)

app.listen(port, function () {
    console.log(`Example app listening on port !`);
});