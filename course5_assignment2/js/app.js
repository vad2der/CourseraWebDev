(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListCheckOffService'];
function ShoppingListController1(ShoppingListCheckOffService) {
  var list1 = this;

  // Use factory to create new shopping list service

  list1.items = ShoppingListCheckOffService.getItems()[0];

  list1.switchItemBasket = function (itemIndex) {
    ShoppingListCheckOffService.switchItemBasket(itemIndex);
  };

  list1.checkList = function(){
    if (list1.items.length === 0){
      list1.message = "Everything is bought!";
     }
  }
}

// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListCheckOffService'];
function ShoppingListController2(ShoppingListCheckOffService) {
  var list2 = this;

  // Use factory to create new shopping list service
  
  list2.items = ShoppingListCheckOffService.getItems()[1];

  list2.refreshItems = function (){
    list2.items = ShoppingListCheckOffService.getItems()[1];
  };

  list2.checkList = function(){
    if (list2.items.length === 0){
      list2.message = "Nothing bought yet";
    } else{
      delete list2.message;
    };
  }
}

// Service
function ShoppingListCheckOffService() {
  var service = this;

  var items = [[{ name: "cookie", quantity: 10 },
                      { name: "book", quantity: 2 },
                      { name: "light bulb", quantity: 3 },
                      { name: "water pack", quantity: 1 },
                      { name: "duck", quantity: 1 }],
                []];
  // List of shopping items
  service.switchItemBasket = function (itemIndex) {
    var the_item = items[0][itemIndex];
    items[0].splice(itemIndex, 1);
    items[1].push(the_item);
  };

  service.getItems = function () {
    return items;
  };
}

})();
