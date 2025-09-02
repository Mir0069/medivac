const mongoose=require('mongoose')
const doctorschema=mongoose.Schema({

    name:String,
    email:String,
    password:String,
    patients:{
        type:Array,
        default:[]

    },
    contact:Number,
    picture:String,

})

module.exports=mongoose.model("user",doctorschema)