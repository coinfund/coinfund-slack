/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 21:30:22
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-16 02:00:22
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
    function InvitesCtrl($scope, $log, $http, Config) {
      $scope.requestInvite = function() {
        if (!$scope.email) {
          $log.log('No email entered.');
        }

        var ep = Config.apiEndpoint + 'api/slackinvite';
        $http.post(ep, {email: $scope.email})
          .then(function() {
            $scope.done = true;
          }, function(err) {
            $scope.err = err;
          });
      };
    }

  }
})();
