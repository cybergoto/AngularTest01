/**
 * Created by User on 2016/07/26.
 */
(function () {
    'use strict';

    var app = angular.module('ex02', ['ui.router']);

    /*
    ui.routerÇÃê›íË
    xxxProviderÇÕíËå^
     */
    app.config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvier, $stateProvider) {
            $urlRouterProvier.otherwise('/a1');
            $stateProvider.state('a1', {
                url: '/a1',
                templateUrl: '/components/a1.html'
            }).state('a2', {
                url: '/a2',
                templateUrl: '/components/a2.html'
            }).state('a3', {
                url: '/a3',
                templateUrl: '/components/a3.html'
            });
        }
    ]);

    /*
    index.html
     */
    app.controller('AppController', [function() {

    }]);

    /*
    a1.html
     */
    app.controller('a1Controller', [function() {

    }]);

    /*
     a2.html
     */
    app.controller('a2Controller', [function() {

    }]);

    /*
     a3.html
     */
    app.controller('a3Controller', [function() {

    }]);
})();