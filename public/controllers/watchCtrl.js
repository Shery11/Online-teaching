var app = angular.module('myApp');
app.controller('watchCtrl', function ($scope) {
    $scope.roomName = '';
    $scope.joinedRoom = false;
    $scope.joinRoom = function () {
      $scope.$broadcast('joinRoom');
    };
    $scope.leaveRoom = function () {
      $scope.$broadcast('leaveRoom');
    };
  });