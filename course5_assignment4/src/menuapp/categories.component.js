(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesComponent', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    list: '<',//spend 3 hours looking for a mistake - this comma
  }
});

})();
