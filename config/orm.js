const connection = require('../config/connection');


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

const orm = {
    selectAll: function(burgers, callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
      }

}
module.exports = orm;
