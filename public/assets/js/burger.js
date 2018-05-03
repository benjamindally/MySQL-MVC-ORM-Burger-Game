$(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
      burgerType: $("#burger_input")
        .val()
        .trim(),
      devoured: false,
    };
    $.ajax("/", {
      type: "POST",
      data: newBurger,
    }).then(function() {
      console.log("new burger added");
      $("#burger_input").val("");
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

  function reload() {
    $.get("/", function(data) {});
  }
});
