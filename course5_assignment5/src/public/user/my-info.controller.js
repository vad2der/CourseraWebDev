(function(){
	'use strict';

	angular.module('public')
		   .controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['MenuService', 'AccountService', 'ApiPath'];
	function MyInfoController(MenuService, AccountService, ApiPath){
		var accountCtrl = this;
		accountCtrl.account = AccountService.getAccount();		
		var promise = MenuService.getMenuItemByShortName(accountCtrl.account.favoriteDish);				
		accountCtrl.account.path = ApiPath;
		if (accountCtrl.account){
			promise.then(function(result){accountCtrl.account.favoriteDish = promise.$$state.value})
		};
	};
})();