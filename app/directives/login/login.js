'use strict';

angular.module('myApp.login', [])


    .directive('ngLogin', function() {
        return {
            scope : {
                username: '@username',
                password: '@password'
            },

            templateUrl: 'directives/login/login.html',

            controller: ['$scope','$http', function ngLoginController($scope, $http){
                var self = this;

            }]
        }
    });


