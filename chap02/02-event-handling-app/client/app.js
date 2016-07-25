/**
 * イベント・ハンドリングの実験
 */
(function () {
    'use strict';

    var app = angular.module('laboratory', []);

    app.controller('EventController', function () {

        this.eventInfo = {};

        this.fire = function ($event) {
            this.eventInfo = angular.toJson($event);
        };

    });

})();