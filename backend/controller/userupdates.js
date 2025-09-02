const express = require('express')
const usermodel = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const {}=require('../utils/generatetoken')
const upload=require("../config/multerconfig")
const generatetoken = require('../utils/generatetoken')
const { set } = require('mongoose')

module.exports.createfamilycode=async(req, res) => {
    try {
        let {  email,password,familycode } = req.body
         let user=await usermodel.findOne({email:email})
        bcrypt.compare(password,user.password,async()=>{
            let u=await usermodel.findOneAndUpdate({email:email},{familycode:familycode})
            res.status(200).json({
            message: "Family Created",
            familycode
            })

        })

    }
    catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}
module.exports.addhealthdata=async(req, res) => {
    try {
        let {  email,password,bp,stress,o2level,sleepq } = req.body
         let user=await usermodel.findOne({email:email})
        bcrypt.compare(password,user.password,async()=>{
            let u=await usermodel.findOneAndUpdate({email:email},{ $set:{bp,stress,o2level:o2level,sleepq:sleepq}})
            res.status(200).json({
            message: "data added",
            u
            })

        })

    }
    catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}
module.exports.addhealthdata=async(req, res) => {
    try {
        let {  email,password,bp,stress,o2level,sleepq } = req.body
         let user=await usermodel.findOne({email:email})
        bcrypt.compare(password,user.password,async()=>{
            let u=await usermodel.findOneAndUpdate({email:email},{ $set:{bp,stress,o2level:o2level,sleepq:sleepq}})
            res.status(200).json({
            message: "data added",
            u
            })

        })

    }
    catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
}