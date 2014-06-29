'use strict';

/**
 * @ngdoc function
 * @name bomtourApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bomtourApp
 */
angular.module('bomtourApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
