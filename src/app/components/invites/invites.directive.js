/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 21:30:22
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-22 14:15:05
*/

(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .directive('invites', invites);

  /** @ngInject */
  function invites($log, $state, $http, Config) {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/invites/invites.html',
      scope: true,
      link: function(scope) {

        scope.requestInvite = function(email) {
          $log.log('email', email);
          if (angular.isUndefined(email)) {
            $log.log('no email entered');
            return;
          }

          var ep = Config.apiEndpoint + 'api/slack/invite';
          $http.post(ep, {email: email})
            .then(function() {
              scope.done = true;
            }, function(err) {
              scope.err = err;
              if (!err.data) {
                scope.genericError = true;
                return;
              }
              if (!err.data.ok) {
                if (err.data.err === 'invalid_email') {
                  scope.invalidEmail = true;
                } else if (err.data.err === 'already_invited') {
                  scope.alreadyInvited = true;
                }
              }
            });
        };

        scope.tryAgain = function() {
          $state.reload();
        };


      }
    };
    return directive;
  }

})();
