'use strict';

angular.module('myApp.infoBubble', [])

    .directive('ngInfoBubble', function() {
        return {
            restrict: 'E',

            scope : {
                id: '@infoId',
                path : '@contentSrc'
            },

            transclude:{
                'cost':'span'
            },

            templateUrl: 'directives/infobubble/infobubble.html'

        }
    });


