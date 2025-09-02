
const express = require('express')
const router = express.Router()
const usermodel = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
// const upload=require("../config/multerconfig")
const {registeruser,loginuser}=require('../controller/authcontroller')
const {createfamilycode,addhealthdata}=require('../controller/userupdates')
// router.get("/", (req, res) => {
//     res.send("its working")
// })
router.get("/", async(req, res) => {
    let {  email, password } = req.body
    
           let u =await usermodel.findOne({email:email})
     res.status(200).json({
            message: "get succesful",
            u
        })
})
router.post("/register", registeruser)
router.post("/updatecode", createfamilycode)
router.post("/addh", addhealthdata)

router.post("/login", loginuser)

module.exports = router
