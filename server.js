// Dependencies
// ============================
const express = require("express");

// Sets up the Express App
// ============================
const app = express();
const PORT = process.env.PORT || 3001; // SET THE PORT

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));// THIS DE-ENCRYPTS THE DATA AND PARSES IT OUT INTO REQ.BODY
app.use(express.json());//THIS CONVERTS THE PARSED OUT DATA TO JSON FORMAT
app.use(express.static("./app/public")) //THIS MAKES THE FOLDER PUBLIC AND GIVES THE BROWSER ACCESS TO THE CONTENT

// TEST ROUTE
app.get("/", function(req, res) {
    res.send("HELLO WORLD");
  });
console.log("hello world")

// //SETS UP HANDLEBARS
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// // IMPORT ROUTES AND GIVE THE SERVER ACCESS TO THEM
// var routes = require("./controllers/burgers_controller");
// app.use(routes);


//START THE SERVER SO IT CAN BEGIN LISTENING TO CLIENT REQUESTS
app.listen(PORT, function() { 
    console.log("App listening on PORT " + PORT);// LOG THE CONSOLE WHEN OUR SERVER HAS OPENED AND PROVIDE THE LINK!
});
