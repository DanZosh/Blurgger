const connection = require("../config/connection.js");
const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.


const burger = {
    all:function(cbController){
        console.log("ALL model triggered")
        orm.selectAll("burgers", function(result) { //results are are from cbModel
            cbController(result);
        });   
    },
    create:function(
        cols, 
        vals, 
        cbCreateController){
            console.log("CREATE model triggered")
            orm.insertOne(
                "burgers", 
                cols, //array from the controller
                vals, //array from the controller
                function(result) {cbCreateController(result)}
        );   
    },
    update:function(
        objColVals, 
        condition, 
        cbUpdateController){
            console.log("UPDATE model triggered")
            orm.updateOne(
                "burgers", 
                objColVals, 
                condition, 
                function(result){cbUpdateController(result)}
        );
    }
}

// * Export at the end of the `burger.js` file.
module.exports = burger;
