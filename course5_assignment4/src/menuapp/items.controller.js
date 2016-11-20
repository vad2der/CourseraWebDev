(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'items'];
function ItemDetailController($stateParams, items) {
  var itemsController = this;
  itemsController.item_list = items;
  itemsController.categoryShortName = $stateParams.categoryShortName;
}

})();
