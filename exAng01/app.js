/**
 * Created by User on 2016/07/25.
 */
(function () {
    'use strict';

    var app = angular.module('calc', []);

    app.controller('CalcController', [function() {
        this.param1 = 0;
        this.param2 = 0;
        this.result = 0;

        this.calculateParam = function() {
            this.result = Number(this.param1) + Number(this.param2);
        };
     }]);
})();