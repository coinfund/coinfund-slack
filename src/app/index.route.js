(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })
      .state('stats', {
        url: '/stats',
        templateUrl: 'app/components/stats/stats.html',
        controller: 'StatsController',
        controllerAs: 'ctrl'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
