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
                message: this.message,
                nice: 0
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

    app.directive('snsNice', [function () {
        return {
            restrict: 'E',
            template: '<button class="btn btn-primary btn-sm"></button>',
            replace: true,
            scope: {
                message: '=message'
            },
            link: function (scope, element, attrs, controller, transclude) {
                scope.message.nice = scope.message.nice | 0;
                scope.$watch('message.nice', function (value) {
                    element.text(value + 'ナイス!');
                });
                console.log(element);
                element.on('click', function () {
                    scope.message.nice++;
                    scope.$apply();
                });
            }
        };
    }]);

})();