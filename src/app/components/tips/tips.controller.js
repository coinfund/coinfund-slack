(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .controller('TipsController', TipsController);

  /** @ngInject */
  function TipsController(Restangular, $log) {
    var vm = this;
    Restangular.one('api/tips').get().then(function(data) {
      vm.data = data;
      $log.log(data);
    });
  }

})();
