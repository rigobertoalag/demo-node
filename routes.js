const express = require('express')
const routes = express.Router()

/** GET METHODS*/

//GET Todos los ahorros
routes.get('/ahorro', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM ahorro', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
/*
//GET Ahorro by ID
routes.get('/ahorro/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM books WHERE id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

/** POST METHODS

//POST nuevo ahrro 
routes.post('/ahorro', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO ahorro SET ?', [req.body],(err, rows)=>{
            if(err) return res.send(err)
            res.send('Registro guardado')
        })
    })
})

/** GET METHODS TESTING

//GET Todos los libros
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM books', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//GET Libro by ID
routes.get('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM books WHERE id = ?',[req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

/** POST METHODS TESTING

//POST nuevo libro 
routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO books SET ?', [req.body],(err, rows)=>{
            if(err) return res.send(err)
            res.send('Registro guardado')
        })
    })
})
*/
module.exports = routes