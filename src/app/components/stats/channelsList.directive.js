/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 21:30:22
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-22 14:39:41
*/

(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .directive('channelsList', channelsList);

  /** @ngInject */
  function channelsList($log) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/stats/channelsList.html',
      scope: {
        channelsData: '='
      },
      link: function(scope) {

      }
    };
    return directive;
  }

})();
