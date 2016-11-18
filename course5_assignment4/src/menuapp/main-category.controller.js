(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryController', MainCategoryController);


MainCategoryController.$inject = ['MenuDataService', 'categories'];
function MainCategoryController(MenuDataService, categories) {
  var maincategory = this;
  maincategory.categories = categories;
}

})();
