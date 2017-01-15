(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
