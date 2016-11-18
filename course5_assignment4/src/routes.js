(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainCategory', {
    url: '/main-category',
    templateUrl: 'src/menuapp/templates/main-category.template.html',
    controller: 'MainCategoryController as mainCategory',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('mainList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: "ItemDetailController as itemDetail",
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  });

}

})();
