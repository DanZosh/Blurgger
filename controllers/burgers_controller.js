const express = require("express");
var router = express.Router(); //not sure why this is here but its in the cats example
const burger = require("../models/burger.js");


router.get("/", function(req,res){
        console.log("GET controller triggered")
    burger.all(function(result){ //results are from the cbController (still DB content) that gets rendered
        var hbsObject = {
            blurgers:result 
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})
router.post("/api/burgers", function(req, res){
    console.log("test")
    console.log(req.body)
        console.log("CREATE controller triggered")
    burger.create(
            ["burger_name", "devoured"], //columns in table
            [req.body.name, req.body.devoured], //values from the user in put in public/assets/js/burger.js
            function(result){
            // console.log(req.body)
        console.log("Where is this boomerang?")
        console.log("Create burger results: ", results)
        res.json({
            id: result.insertID
        })
    });
})

module.exports = router;