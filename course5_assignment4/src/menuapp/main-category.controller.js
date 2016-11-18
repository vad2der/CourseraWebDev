(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryController', MainCategoryController);


MainCategoryController.$inject = ['MenuDataService', 'categories'];
function MainCategoryController(MenuDataService, categories) {
  var mainlist = this;
  mainlist.categories = categories;
}

})();
