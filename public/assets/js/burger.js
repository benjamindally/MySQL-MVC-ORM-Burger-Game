$(function() {
  //this will trigger the actions that will cause a burger to be given a value of true in the devour category
  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = { id: $(this).attr("id") };

    //this is the ajax PUT call that routes to the controller
    $.ajax("/index", {
      type: "PUT",
      data: id,
    }).then(function(data) {
      console.log("Updated Burger");
      location.reload();
    });
  });

  //This will trigger the actions that will put a new burger into the database and route to the controller
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
      burgerType: $("#burger_input")
        .val()
        .trim(),
      devoured: false,
    };

    //this will cause the post route to trigger so a new burger can go into the database
    $.ajax("/index", {
      type: "POST",
      data: newBurger,
    }).then(function() {
      console.log("new burger added");
      $("#burger_input").val("");
      location.reload();
    });
  });
});
