$(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
      burgerType: $("#burger_input")
        .val()
        .trim(),
      devoured: false,
    };
    console.log(newBurger);
    $.ajax("/", {
      type: "POST",
      data: newBurger,
    }).then(function() {
      console.log("new burger added");
      location.reload();
    });
  });

  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = { id: $(this).attr("id") };

    $.ajax("/", {
      type: "PUT",
      data: id,
    }).then(function() {
      console.log("Updated Burger");
      location.reload();
    });
  });
});
