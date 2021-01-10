const orm = require("../config/orm.js");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.


const burger = {
    all:function(cbController){
        console.log("model triggered")
        orm.all("burgers", function(result) {
            cbController(result);
        });   
    }
    //insert create here
}

// * Export at the end of the `burger.js` file.
module.exports = burger;
