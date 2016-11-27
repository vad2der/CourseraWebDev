(function(){
	'use strict';

	angular.module('public')
		   .controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['MenuService', 'AccountService', 'ApiPath'];
	function MyInfoController(MenuService, AccountService, ApiPath){
		var accountCtrl = this;
		accountCtrl.account = AccountService.getAccount();		
		var promise = MenuService.getMenuItemByShortName(accountCtrl.account.favoriteDish);
		promise.then(function(result){accountCtrl.account.favoriteDish = promise.$$state.value})		
		accountCtrl.account.path = ApiPath;
	};
})();