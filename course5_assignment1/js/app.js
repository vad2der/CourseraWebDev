(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  var sayMessage = function (msg, type) {
    $scope.message = msg;
    $scope.message_type = type+"_message";
  };

  $scope.checkDishes = function () {
    $scope.message = "";
    var ListOfDishes = $scope.dishes.split(",");
    var numOfDishes = 0;
    var refinedListOfDishes = [];
    for(var dish_num in ListOfDishes){
      if (ListOfDishes[dish_num] != ""){
        refinedListOfDishes.push(ListOfDishes[dish_num]);
      }
    }
    numOfDishes = refinedListOfDishes.length;
    if(numOfDishes === 0){
      sayMessage("Please enter data first", "red");
    }else if (numOfDishes < 4) {
      sayMessage("Enjoy!", "green_enjoy");
    }else if (numOfDishes >= 4) {
      sayMessage("Too much!", "green");
    }
    $scope.dishes = "";
  };
}

})();
