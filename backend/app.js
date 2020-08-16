const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const morgan = require('morgan');

const pool = require('./database');

app.use(morgan('dev'));
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario


app.get('/', async(req, res)=>{
    try {
        const conn = await pool.getConnection();
        var query = 'SELECT * FROM Location';
        const rows = await conn.query(query);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({status:'Deny', response: error});
    }
})

app.post('/',async(req, res)=>{
    try {
        let body = req.body;
        const conn = await pool.getConnection();
        var query = 'INSERT INTO Location (name, area_m2) VALUES (?,?)';
        const result = await conn.query(query,[req.body.name, req.body.area_m2]);
        res.status(200).json({status:'ok', response: result});
    } catch (error) {
        res.status(500).json({status:'Deny', response: error});
    }
})


app.listen(3000, ()=>{
    console.log('listen on port 3000');
})