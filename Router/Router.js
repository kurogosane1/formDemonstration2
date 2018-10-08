const express = require('express');
const router = express.Router();
const db =  require('../Model/data.js');
// const Location = require('../Model/schema.js');
// const locdb = mongoose.model("location", locSchmema);

// const db = require('../Models/data');


router.get('/iCharge', (req, res)=>{
   db.Location.find().then(function(location){
       res.json(location)
   })
   .catch(function(err){
       res.send(err);
   });

});


router.get('/iCharge/:Area', (req, res)=> {
    console.log(req.body);
    console.log(req.params);
    db.Location.findOne({"Area": req.params.id}, {$push: req.body})
    .then(function(Geo) {
        console.log(Geo)
        res.json(Geo)
    })
    .catch(function(err){
        res.send(err);
    })
})

// router.post('/iCharge/:Area', (req, res)=> {
//   db.Location.update({"Area": req.params.id}, {"Geomarket": req.body})
//   .then(function (location){
//       console.log(location)
//       res.json(location)
//   })
//   .catch(function(err){
//       res.send(err);
//   })
// })

router.post('/iCharge/:Area', (req, res)=> {
    let area = req.params.Area;
    db.Location.findOneAndUpdate({Area:area}, {$push: req.body})
    .then(function(location){
        console.log(location.Geomarket)
        res.json(location);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.post('/iCharge/:Country', (req, res)=> {
    let area = req.params.Area;
    db.Location.findOneAndUpdate({Area:area}, {$push: req.body})
    .then(function(location){
        console.log(location.Geomarket)
        res.json(location);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.post('/iCharge', (req, res) => {
    db.Location.create(req.body)
    .then(function(location){
        res.json(location);
    })
    .catch(function(err){
        res.send(err);
    })
    
})


router.get('/segment', (req, res)=>{
    db.segment.find().then(function(location){

        res.json(location)
    })
    .catch(function(err){
        res.send(err);
    });
 
 });


router.post('/segment', (req, res) => {
    db.segment.create(req.body)
    .then(function(segment){
        res.json(segment);
    })
    .catch(function(err){
        res.send(err);
    })
})



router.post('/segment/SLB', (req, res) => {
    console.log()
    db.segment.findOneAndUpdate({For: "SLB" }, {$push: req.body})
    .then(function(segment){
        res.json(segment);
    })
    .catch(function(err){
        res.send(err);
    })
})


module.exports = router;
