const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const connection = mysql.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"fogado"

})

app.use(cors());

app.get("/",(req, res) =>{
    res.send("Fut a backend")
})

app.listen(3000,() =>{
    console.log("Fut a server")
})

app.get("/szobak", (req, res)=>{
    const db = "Select * FROM szobak";
    connection.query(db, (err, result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
});

app.get("/foglalasok", (req, res) =>{
    const db = "Select FROM foglalasok"
    
})