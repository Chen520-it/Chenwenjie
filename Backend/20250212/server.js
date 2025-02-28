const express = require("express")
const app = express();
const mysql = require("mysql")
const cors = require("cors")
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    port:'3306',
    password:'',
    database:'kozutak'

})

app.use(cors());

app.get("/",(req, res) =>{
    res.send("Fut a backend")
})

app.listen(3000,() =>{
    console.log("Fut a server")
})



app.get("/regiok", (req, res) =>{
    const db = "SELECT * FROM regiok";
    connection.query(db, (err,result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})