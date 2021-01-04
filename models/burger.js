const orm = require("orm");

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.


const burgerStuff = function (response){
    switch(response){
        case '1':
            selectAll();
            break;
        case '2':
            insertOne(data);
            break;
        case '3':
            updateOne(data);
            break;
        default:
            connection.end();
    }
}

// * Export at the end of the `burger.js` file.
module.exports = burgerStuff;
