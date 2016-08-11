$(document).ready (function(){
  $(".container").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = ""

    if (side1 === side2 && side1 === side3) {
      result = "an equilateral";
    }
    else if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1 ) {
      result = "not a";
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
      result = "an isoscleles";
    }
    else if ( side1 != side2 &&
                side1 != side3 &&
                side2 != side3 ) {
      result = "a scalene";
    }
  $("h2").show();
  $(".type").text(result);
  event.preventDefault();
  });
});

/*
(side1 + side2 <= side3 ||
side1 + side3 <= side2 ||
side2 + side3 <= side1)
*/
