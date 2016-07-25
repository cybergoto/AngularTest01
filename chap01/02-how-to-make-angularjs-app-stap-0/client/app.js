/**
 * SNS
 */
(function () {
    'use strict';

    // angluarJS��module�P�ʂ�Application�ƂȂ�
    // 'sns'��html��ng-app�ƍ��킹�Ă���
    var app = angular.module('sns', []);
    // module�ɐV����Function(TimelineController)��ǉ�
    app.controller('TimelineController', function() {
        this.messages = [];
        this.message = '';

        this.postMessage = function(){
            this.messages.push({
                message: this.message,
                postDateTime: new Date()
            });
            this.message = '';
        };
    });
    //�����܂ł��ǉ����ꂽFunction
})();