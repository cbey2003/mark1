'use strict';

angular.module('myApp.product', [])

    .directive('ngProduct', function() {
        return {
            scope : {
                id: '@productId',
                path : '@contentSrc'
            },

            templateUrl: 'directives/product/product.html',

            controller: ['$scope','$http', function ngProductController($scope, $http){
                $http.get($scope.path).then(function(response) {
                    $scope.products = response.data;
                });
            }]
        }
    });


