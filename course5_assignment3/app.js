(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/")
.directive('foundItems', foundItemsDirective);

function foundItemsDirective() {
  var ddo = {
    templateUrl: 'menuItemList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchParam = "";

  menu.searchItems = function () {    
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchParam);    
    promise.then(function (result) {
      menu.found  = result;
      menu.foundBool = true;
      if (menu.found.length == 0){menu.error = true};
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menu.deleteThisItem = function(itemIndex){
    menu.found.splice(itemIndex, 1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchParam) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result){
      var foundItems= [];
      if (searchParam != undefined){
        for (var r_ind in result.data.menu_items){          
          if (result.data.menu_items[r_ind].description.toString().toLowerCase().includes(searchParam.toString().toLowerCase()) 
            || result.data.menu_items[r_ind].name.toString().toLowerCase().includes(searchParam.toString().toLowerCase())){
            foundItems.push(result.data.menu_items[r_ind]);
          };
        };  
      };
      
      return foundItems;
    });    
  };
}
})();
