function createRestaurant(name) {
  pizzaRestaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return pizzaRestaurant;
}

function addMenuItem(pizzaRestaurant, item) {
  if(item.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(item)) {
    pizzaRestaurant.menus.lunch.push(item);
  }

  if(item.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(item)) {
    pizzaRestaurant.menus.breakfast.push(item);
  }

  if(item.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(item)) {
    pizzaRestaurant.menus.dinner.push(item);
  }

}



function removeMenuItem(pizzaRestaurant, item, type) {
console.log(pizzaRestaurant, item, type);
  console.log("a" , pizzaRestaurant.menus[type]);

if (pizzaRestaurant.menus[type][0] === undefined) {
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
} else {
  pizzaRestaurant.menus[type].splice(0 , 1);

  console.log("a" , pizzaRestaurant.menus[type]);
  return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  }
}


//I attempted to make the removeMenuItem function dynamic the
//addMenuItem but couldn't figure out how. Below are a few attempts
//I tried to get it working.

//Attempt 1
  // if(type === "breakfast" && pizzaRestaurant.menus.breakfast.includes(item)) {
  //   pizzaRestaurant.menus.breakfast.pop(item);
  // }
  //
  // if (type === "lunch" && pizzaRestaurant.menus.lunch.includes(item)) {
  //   pizzaRestaurant.menus.lunch.pop(item);
  // }
  //
  // if (type === "dinner" && pizzaRestaurant.menus.dinner.includes(item)) {
  //   pizzaRestaurant.menus.dinner.pop(item);
  // }



/*
//Attempt 3
function removeMenuItem(pizzaRestaurant, item, type) {
    for (var i = 0; i < pizzaRestaurant.menus.breakfast.length; i++){
      if (pizzaRestaurant.menus.breakfast.item[i] === item) {
        pizzaRestaurant.menus.breakfast.splice(i, 1);
      }
    }
}
//Attempt 3
function removeMenuItem(pizzaRestaurant, item, type) {
    for (var i = 0; i < pizzaRestaurant.menus.lunch.length; i++){
      if (pizzaRestaurant.menus.lunch.item[i] === item) {
        pizzaRestaurant.menus.lunch.splice(i, 1);
      }
    }
}

// Attempt 4
/*
function removeMenuItem(pizzaRestaurant, item, type) {
    if (pizzaRestaurant.menus.breakfast.includes(item)) {
          pizzaRestaurant.menus.breakfast.shift(item);
        }
    if (pizzaRestaurant.menus.lunch.includes(item)) {
          pizzaRestaurant.menus.lunch.shift(item);
        }
    if (pizzaRestaurant.menus.dinner.includes(item)) {
          pizzaRestaurant.menus.dinner.shift(item);
    }
}
*/

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
