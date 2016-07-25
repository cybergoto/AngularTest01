/**
 * SNS
 */
(function () {
    'use strict';

    var app = angular.module('sns', ['ngResource']);

    app.factory('Message', ['$resource', function ($resource) {
        return $resource('/api/messages/:id', {id: '@id'});
    }]);

    app.controller('TimelineController', ['Message', function (Message) {

        this.message = '';

        this.messages = Message.query();

        this.postMessage = function () {
            var message = new Message({
                message: this.message
            });
            message.$save();
            this.messages = Message.query();
            this.message = '';
        };

        this.removeMessage = function (message) {
            message.$remove();
            this.messages = Message.query();
        }

    }]);

})();