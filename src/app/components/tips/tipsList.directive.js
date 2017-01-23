/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 21:30:22
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-22 19:03:50
*/

(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .directive('tipsList', tipsList);

  /** @ngInject */
  function tipsList() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/tips/tipsList.html',
      scope: {
        tipsData: '='
      },
      link: function() {
      }
    };
    return directive;
  }

})();
