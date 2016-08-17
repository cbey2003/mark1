'use strict';

angular.module('myApp.menu', [])


.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({redirectTo: '/view1'});
}])

.directive('ngMenu', function() {
    return {
        scope : {
            id: '@menuId',
            primary: '@isPrimary',
            path : '@menuSrc'
        },

        templateUrl: 'directives/menu/menu.html',

        controller: ['$scope','$http', function ngMenuController($scope, $http){
            var self = this;

            $scope.menutype = $scope.primary=='true'?'primary':'';

            $http.get($scope.path).then(function(response) {
                $scope.menuItems = response.data;
            });
        }]
    }
});


