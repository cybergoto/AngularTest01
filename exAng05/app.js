/**
 * Created by User on 2016/07/26.
 */
(function () {
    'use strict';

    var app = angular.module('ex05', []);

    app.filter('dottext', function(){
        return function(value, length, postfix){
            if(value.length > length){
                return value.substring(0, length) + postfix;
            }else{
                return value;
            }
        }
    });

    app.directive('custMsg', [function(){
        return{
            restrict: 'EA',
            template: '<button>Hello World!</button>',
            replace: true,
            scope: {
                message: '@message'
            },
            link: function (scope, element, attrs, controller, transclude) {
                element.on('click', function(){
                    element.text(scope.message);
                });
            }
        }
    }]);

    app.controller('ex05Controller', [function() {
        this.message = "";
    }]);
})();