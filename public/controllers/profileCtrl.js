var app = angular.module('myApp');

app.controller('profileCtrl', function ($scope) {
    $scope.hasStream = false;
    $scope.roomName = '';
    $scope.isBroadcasting = '';
    $scope.prepare = function prepare() {
      $scope.$broadcast('prepare');
    };
    $scope.start = function start() {
      $scope.$broadcast('start');
    };
  });