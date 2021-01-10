const express = require("express");
var router = express.Router(); //not sure why this is here but its in the cats example
const burger = require("../models/burger.js");


router.get("/", function(req,res){
    console.log("controller triggered")
    burger.all(function(result){
        var hbsObject = {
            burgers:result
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

module.exports = router;