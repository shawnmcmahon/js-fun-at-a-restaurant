
function nameMenuItem(name) {
    var deliciousMenu = `Delicious ${name}`;


    return deliciousMenu;
}

nameMenuItem("Pizza");
nameMenuItem("Burrito");
nameMenuItem("Taco");

function createMenuItem(name, price, type) {
    var menuItem = {
      name: name,
      price: price,
      type: type,
    }

    return menuItem;
}

createMenuItem("Pizza", 10.99, "dinner");


function addIngredients(item, ingredients) {

 if (ingredients.includes(item)) {
   return ingredients
 } else {
   ingredients.push(item);
 }
  return ingredients;
}



function formatPrice(price) {
  var formattedPrice = "$" + price;

  return formattedPrice;
}

function decreasePrice(price){
  var decreasedPrice = price * .9;

  return decreasedPrice;

}


function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }

  return recipe;

}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
