const express = require('express');
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.urlencoded());
app.use('/static', express.static('static'));
app.set('views', path.join(__dirname, 'views'));

let connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'events'
});

connection.connect();


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/scheduler.html"));
});

app.get("/weekView", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/WeekView.html"));
});

app.post("/create", (req, res) =>{
    console.log(req.body);
    let query = "insert into events values (' "+ req.body.subject +" ', '"+ req.body.teacher +"', '"+ req.body.batch +"', '"+ req.body.description +"')";
    connection.query(query, (err) =>{
        if(err) throw err;
        res.sendFile(path.join(__dirname, "/views/scheduler.html"));
    });
});

app.listen(80, () =>{
    console.log("Server Running");
})