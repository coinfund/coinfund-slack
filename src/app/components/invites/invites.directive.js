/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 21:30:22
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-14 22:11:36
*/

(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .directive('invites', invites);

  /** @ngInject */
  function invites() {
    var directive = {
      restrict: 'EA',
      controller: InvitesCtrl,
      scope: {
      },
      templateUrl: 'app/components/invites/invites.html'
    };
    return directive;

    /** @ngInject */
    function InvitesCtrl($scope, $log) {
      $log.log('haha', $scope);
    }

  }
})();
