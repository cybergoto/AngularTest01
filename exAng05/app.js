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

    app.controller('ex05Controller', [function() {
        this.message = "";
    }]);
})();