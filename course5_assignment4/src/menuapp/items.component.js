(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/manuapp/templates/main-items.template.html',
  bindings: {
    items: '<'
  }
});

})();
