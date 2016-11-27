(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://vad2der-course5.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
