(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(Restangular, $log) {
    var vm = this;
    Restangular.one('api/slack').get().then(function(data) {
      vm.data = data;
      $log.log(data);
    });
  }

})();
