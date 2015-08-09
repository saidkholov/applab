var ProjectControllers = angular.module('ProjectControllers', []);


ProjectControllers.controller('indexCtrl', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);