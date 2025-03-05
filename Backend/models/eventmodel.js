const mongoose=require('mongoose')
const eventschema=mongoose.Schema({
    name:String,
    img:String,
    description:String,
    price:String
})
const eventmodel=new mongoose.model('events',eventschema)
module.exports=eventmodel