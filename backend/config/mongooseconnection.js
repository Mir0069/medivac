const mongoose=require('mongoose')
const dbg=require('debug')("deveopment:mongoose")



mongoose.connect("mongodb://127.0.0.1:27017/medivac").then(()=>{console.log("connected")}).catch((err)=>{console.log(err)})

module.exports=mongoose.connection