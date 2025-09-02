const mongoose=require('mongoose')
const familymemberschema=mongoose.Schema({

    name:String,
    email:String,
    password:String,
    isfamilyhead:Boolean,
    familymembers:{
        type:Array,
        default:[]

    },
    familycode:String,
    doctors:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,

})

module.exports=mongoose.model("user",familymemberschema)