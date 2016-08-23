'use strict';

angular.module('myApp.contentPane', [])

    .directive('ngContentPane', function() {
        return {
            scope : {
                id: '@contentId',
                path : '@contentSrc'
            },

            templateUrl: 'directives/contentpane/contentPane.html',

            controller: ['$scope','$http', function ngContentPaneController($scope, $http){
                $http.get($scope.path).then(function(response) {
                    $scope.contentItems = response.data;
                });
            }]
        }
    });


