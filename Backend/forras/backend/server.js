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

});

connection.connect(err =>{
    if(err){
        console.error('Adatbazis nincs osszekotve:', err);

    }
    else{
        console.log('Sikeres');
    }
});

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
        if(err) return res.json({error: err.message});
        return res.json(result);
    })
});

app.get("/szoba/:szazon", (req, res) =>{
    db.query( "Select * FROM szobak WHERE szazon = ?",[szazon], (err, result)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json(result[0]);
    })
    
});

app.get("/foglaltsag/:szazon", (req, res) =>{
    const { szazon }= req.params;
    const sql = "Select szobak.szazon, szobak.sznev, vendegek.vnev, foglalasok.erk, foglalsok.tav FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon INNER JOIN vendekek ON foglalasok.vendeg = vendegek.vsorsz WHERE szobak.szazon = ? ORDER BY vendegek.vnev"
    db.query(sql,[szazon], (err, result)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json(result[0]); 
    })
});
    
