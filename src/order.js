function takeOrder(order, deliveryOrders) {
    if (deliveryOrders.length < 3) {
      deliveryOrders = deliveryOrders.push(order);
    }


}

function refundOrder(order, deliveryOrders) {
    if (order === 1) {
      deliveryOrders.shift(order);
    } else {
      deliveryOrders.splice(1 , 1);
    }

}

function listItems(listOfOrders) {
   var list = "";
   for (var i = 0; i < listOfOrders.length; i++) {
     list = list + listOfOrders[i].item + ", ";
   }  return list.slice(0, -2)


}



function searchOrder(deliveryOrders, orderItem) {
    if (deliveryOrders[0].item === orderItem ||
        deliveryOrders[1].item === orderItem) {
      return true;
    } else {
      return false;
    }
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
