(function(){
	'use strict';

	angular.module('public')
		   .controller('SignUpController', SignUpController);

	SignUpController.$inject = ['AccountService', 'MenuService', '$scope'];
	function SignUpController(AccountService, MenuService, $scope){
		var signUpCtrl = this;
		signUpCtrl.account = {};
		signUpCtrl.updated = false;
		signUpCtrl.error_detail = '';
		signUpCtrl.error = false;
		signUpCtrl.itemNotFound = false;

		signUpCtrl.submit = function(){
			if(signUpCtrl.account.favoriteCategory){
				signUpCtrl.account.favoriteCategory = signUpCtrl.account.favoriteCategory.toUpperCase();
			};
			MenuService.getMenuItems(signUpCtrl.account.favoriteCategory)
					   .then(function(response){
					   			signUpCtrl.account.favoriteCategory = response.data;
					   			signUpCtrl.updated = true;
					   			$scope.signUpForm.$setUntouched();
					   			signUpCtrl.itemNotFound = false;
					   		},function(error){
					   			signUpCtrl.error = true;
    							signUpCtrl.error_detail = error.statusText; //https://docs.angularjs.org/api/ng/service/$http
    							signUpCtrl.itemNotFound = true;
  							}
  						);
		};
	};
})();