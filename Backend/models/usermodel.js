const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String,
    isVerified:{type:String,default:true}
},{timestamps:true})
const usermodel=new mongoose.model('user',userschema)
module.exports=usermodel