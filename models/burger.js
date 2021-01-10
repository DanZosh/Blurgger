const orm = require("../config/orm");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.


const burgerStuff = {
    selectAll:function(cb){
        orm.selectAll("burgers", function(res) {
            callback(res);
        });   
    }
    
}

// * Export at the end of the `burger.js` file.
module.exports = burgerStuff;
