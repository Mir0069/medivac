const mongoose=require('mongoose')
const userschema=mongoose.Schema({

    name:String,
    email:String,
    password:String,
    isfamilyhead:Boolean,
    familymembers:{
        type:Array,
        default:[]

    },
    doctors:{
        type:Array,
        default:[]
    },
    contact:Number,
    bp:Number,
    stress:Number,
    o2level:Number,
    sleepq:Number,
    
    familycode:String,
    picture:Buffer,

})

module.exports=mongoose.model("user",userschema)