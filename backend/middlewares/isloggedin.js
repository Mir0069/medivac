const jwt=require('jasonwebtoken')
const usermodel=require('../models/usermodel')
module.exports=async (req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","you need to ligin please")
        return res.redirect("/")


    }

    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY)
        let user=await usermodel.findOne({email:decoded.email}).selected("-password")
        req.user=user;
        next();

    }catch{
        req.flash("error","something went wrong")
        req.redirect("/")
    }

}