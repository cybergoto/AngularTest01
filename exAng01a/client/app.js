/**
 * Created by User on 2016/07/25.
 */
(function () {
    'use strict';

    var app = angular.module('calc', ['ngMessages', 'ui.router']);

    app.config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvier, $stateProvider) {
            $urlRouterProvier.otherwise('/input');
            $stateProvider.state('input', {
                url: '/input',
                templateUrl: '/components/input.html'
            }).state('result', {
                url: '/result',
                templateUrl: '/components/result.html'
            });
        }
    ]);

    app.value('results', []);

    app.service('CalcService', ['results', function (results) {

        this.postCalc = function (result) {
            results.push({
                result: result,
                postDateTime: new Date()
            });
        };

    }]);

    app.controller('CalcController', [function() {

    }]);

    app.controller('inputController', ['$state', 'CalcService', function($state, calcService) {
        this.param1 = 0;
        this.param2 = 0;
        this.result = 0;
        this.resultText = "";

        this.postCalc = function () {
            this.calculateParam();
            this.resultText = this.result + " = " + this.param1 + " + " + this.param2;
            calcService.postCalc(this.resultText);
            $state.go('result');
        };

        this.calculateParam = function() {
            this.result = Number(this.param1) + Number(this.param2);
        };
    }]);

    app.controller('resultController', ['results', function(results) {
        this.results = results;
    }]);

})();