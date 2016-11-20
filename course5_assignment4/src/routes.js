(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig)
.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

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
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MainCategoryController as mainCategories',    
    resolve: {
      data: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    //templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemDetailController',
    controllerAs: 'ctrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
