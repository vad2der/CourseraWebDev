(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/manuapp/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
