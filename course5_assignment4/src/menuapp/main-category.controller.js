(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryController', MainCategoryController);


MainCategoryController.$inject = ['MenuDataService', 'categories'];
function MainCategoryController(MenuDataService, categories) {
  var mainCategory = this;
  mainCategory.categories = categories;
}

})();
