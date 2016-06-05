'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user/:userId', {
    templateUrl: 'pages/user/user.html',
    controller: 'UserCtrl',


  });
}])

.controller('UserCtrl', [ '$scope' , '$rootScope' , '$routeParams' , function($scope , $rootScope,$routeParams) {


  $scope.user = $rootScope.users[$routeParams.userId];

}]);