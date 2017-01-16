/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 21:30:22
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-16 01:05:21
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
          .then(function(response) {
            $log.log('response: ', response);
          }, function(err) {
            $log.log('err: ', err);
          });
      };
    }

  }
})();
