(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .controller('StatsController', StatsController);

  /** @ngInject */
  function StatsController(Restangular, $log) {
    var vm = this;
    Restangular.one('api/slack/stats').get().then(function(data) {
      vm.data = data;
      $log.log(data);
    });
  }

})();
