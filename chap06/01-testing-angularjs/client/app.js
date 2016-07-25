/**
 * SNS
 */
(function () {
    'use strict';

    var app = angular.module('sns', []);

    app.value('messages', []);

    app.service('TimelineService', ['messages', function (messages) {

        this.postMessage = function (message) {
            messages.push({
                message: message,
                postDateTime: new Date()
            });
        };

    }]);

    app.controller('TimelineController', ['messages', 'TimelineService', function (messages, timelineService) {

        this.message = '';

        this.messages = messages;

        this.postMessage = function () {
            timelineService.postMessage(this.message);
            this.message = '';
        };

    }]);

})();