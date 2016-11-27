(function(){
	'use strict';
	angular.module('common')
		.service('AccountService', AccountService);

	function AccountService(){
		var service = this;
		service.account = null;
		
		service.setAccount = function(account){
			service.account = account;
		};		

		service.getAccount = function(){
			return service.account
		};
	}
})();