$(document).ready(function() {
  var icecreamFlavors = ["Vanilla", "chocolate", "mint", "cookie dough"]

  icecreamFlavors.forEach(function(flavor) {
    $('div#flavorlist ul').append("<li>" + flavor + "</li>");

  });
});
