const express = require("express");
var router = express.Router(); //not sure why this is here but its in the cats example
const burger = require("../models/burger");


router.get("/", function(req,res){
    burger.all(function(data){
        var handlebarObject = {
            burgers:data
        };
        console.log(handlebarObject);
        res.render("index", handlebarObject)
    })
})