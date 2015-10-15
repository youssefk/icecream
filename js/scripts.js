$(document).ready(function() {
  var icecreamFlavors = ["Vanilla", "chocolate", "mint", "cookie dough"]
  var ids = [1, 2, 3, 4]

  icecreamFlavors.forEach(function(flavor) {
    $("#icecream" + ids).text(flavor);

  });
});
