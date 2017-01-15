/*
* @Author: Jake Brukhman
* @Date:   2017-01-14 23:20:05
* @Last Modified by:   Jake Brukhman
* @Last Modified time: 2017-01-14 23:21:57
*/


(function() {
  'use strict';

  angular
    .module('coinfundSlack')
    .directive('donation', invites);

  /** @ngInject */
  function invites() {
    var directive = {
      restrict: 'EA',
      controller: DonationCtrl,
      scope: {
        logo: '='
      },
      templateUrl: 'app/components/donations/donation.html'
    };
    return directive;

    /** @ngInject */
    function DonationCtrl($scope, $log) {

    }

  }
})();
