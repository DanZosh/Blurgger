// Make sure we wait to attach our handlers until the DOM is fully loaded.

//PUT REQUEST
$(function() {
    $(".devour").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
        console.log("devoured id: ", id)
      var newDevouredState = {devoured: 1};
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

    //POST REQUEST
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#insertBurger").val().trim(),
        devoured: 0
      }; //this is the req.body
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Blurgered!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  