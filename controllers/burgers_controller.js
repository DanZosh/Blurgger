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
        console.log("POST controller triggered")
    burger.create(
            ["burger_name", "devoured"], //columns in table
            [req.body.burger_name, req.body.devoured], //values from the user in put in public/assets/js/burger.js
            function(result){
            // console.log(req.body)
        console.log("Where is this boomerang?")
        console.log("Create burger results: ", results)
        res.json({
            id: result.insertID
        })
    });
})

router.put("api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id; //this is the id of the burger clicked, should read "id = `x`" to be passed into router.put
        console.log("PUT controller triggered")
        console.log("condition: ", condition)
    burger.update({
        devoured: req.body.devoured //this has the format of {DB columb title: value from the user input}
        },condition, function(result){
            if(result.changedRows == 0){
                return res.status(404).end()//error handling, if no rows were updated then ID doesn't exist
            }else{
                res.status(200).end(); //successful update 
            }
    });
})

module.exports = router;