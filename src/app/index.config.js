(function() {
  'use strict';

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // TODO(jbrukh): config
  }

  /** @ngInject */
  function configRestangular(Config, RestangularProvider) {
    var url = Config.apiEndpoint;
    RestangularProvider.setBaseUrl(url);
  }

  /** @ngInject */
  function configHtml5($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }

  angular
    .module('coinfundSlack')
    .config(config)
    .config(configHtml5)
    .config(configRestangular);

})();
