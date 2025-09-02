const express=require('express')
const app=express()
app.use(express.json())
const path=require('path')
const usersrouter=require('./routes/usersrouter')
require("dotenv").config()
const db=require('./config/mongooseconnection')

const cookieparser=require('cookie-parser')
const docterrouter=require('./routes/doctorrouter')
const familymemberrouter=require('./routes/familymemberrouter')

const cors = require("cors");


// allow frontend requests
app.use(cors({
  origin: "http://localhost:5173", // React frontend
  credentials: true
}));



app.use(express.urlencoded(__dirname,"public"))
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))

app.set("view engine", "ejs")
app.use("/users", usersrouter)
app.use("/doctor", docterrouter)
app.use("/family", familymemberrouter)
require('dotenv').config()


app.get("/",(req,res)=>{
    res.send("hey")
})

app.listen(3000)