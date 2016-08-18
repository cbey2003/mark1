'use strict';

angular.module('myApp.accordion', [])


    .directive('ngAccordion', function() {
        return {
            scope : {
                id: '@accordionId',
                path : '@accordionSrc'
            },

            templateUrl: 'directives/accordion/accordion.html',

            controller: ['$scope','$http', function ngAccordionController($scope, $http){
                var self = this;

                $http.get($scope.path).then(function(response) {
                    $scope.accordionItems = response.data;
                });
            }]
        }
    });


