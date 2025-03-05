var express = require("express");
const eventmodel=require('../models/eventmodel')
var router = express.Router();



router.get("/events", (req, res) => {
   
    eventmodel.find()
    .then(response=>res.status(200).json({message:response}))
    .catch(err=>res.status(401).json({message:err}))
  });

  router.get("/events/:pid", (req, res) => {
   
    eventmodel.findById(req.params.pid)
    .then(response=>
      // console.log(response))
      res.status(200).json({message:response}))
    .catch(err=>res.status(401).json({message:err}))
  });



router.post("/events", (req, res) => {
  let event = new eventmodel({
    name:req.body.name,
    img:req.body.img,
    description:req.body.description,
    price:req.body.price
  });
  event.save()
  .then(response=>res.status(200).json({message:response}))
  .catch(err=>res.status(401).json({message:err}))
});



module.exports = router;
