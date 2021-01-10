const connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

//i dont know what the guts for this are, heres from the read me

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// selectAll(){
//     connection.query("SELECT * FROM burgers", function(err,res){
//        if (err) throw err;
//        return res;
//     });
// }

// insertOne(data){
//     connection.query("INSERT INTO burgers SET ?",data, function(err,res){
//         if (err) throw err;
//         return res;
//     });
// }

// updateOne(data){
//     connection.query("UPDATE burgers SET ? WHERE ?",data, function(err,res){
//         if (err) throw err;
//         return res;
//     }); 

    // * Export the ORM object in `module.exports`.


    // Object for all our SQL statement functions.
const orm = {
    all: function(tableInput, cbModel) {
        console.log("orm triggered")
        var queryString =  "SELECT * FROM " + tableInput + ";";
        console.log("THIS IS THE queryString: ", queryString)
        connection.query(queryString, function(err, result) {
            console.log("THIS IS THE connection.query result: ", result)
            if (err) {
                console.log("THIS IS THE ERROR: ", err)
            throw err;
            // connection.end();
            }
            cbModel(result);
        });
    }

}
module.exports = orm;
