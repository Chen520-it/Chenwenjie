const express = require ("express");
const app = express();
const cors = require("cors");
const mysql= require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"127.0.0.1",
    port:"3307",
    password:"",
    database:"kozutak",
});
    


app.get("/", (req, res) =>{
    res.send("Express is running");
});

app.get("/regiok", (req, res) =>{  
    const sql ="Select * FROM 'regiok'";
    db.query(sql, (err,result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.listen(3001, () =>{
    res.send("Server is running on port 3001");
});
