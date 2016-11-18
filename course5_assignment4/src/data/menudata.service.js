(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");


MenuDataService.$inject = ['$q', '$http']
function MenuDataService($q, $http) {
  var service = this;

  // List of shopping items
  var items = [];
  var deferred = $q.defer();
  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    promise.then(function(result){      
      deferred.resolve(result.data);
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    var promise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
    });
    promise.then(function(result){      
      deferred.resolve(result.data);
    });
  };
}

})();
