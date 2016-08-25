'use strict';

angular.module('myApp.formatCurrency', [])

    .filter('formatCurrency', function() {
        return function(amount, currencySymbol, perUnit) {
            var rem = ( (amount % 1).toFixed(2) )*100,
                floor = amount - (amount % 1),
                dec = (rem != 0 )?rem:'00',
                output = "<div class='currency'><span>"+currencySymbol +"</span><span>"+ floor + "</span><sup>."+dec+"</sup><sub>"+perUnit+"</sub></div>";
            return String(output);
        };
    });