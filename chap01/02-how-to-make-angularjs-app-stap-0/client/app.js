/**
 * SNS
 */
(function () {
    'use strict';

    // angluarJS��module�P�ʂ�Application�ƂȂ�
    // 'sns'��html��ng-app�ƍ��킹�Ă���
    var app = angular.module('sns', []);

    //Service���p�̃T���v��
    //�V���v���ȃR�[�h�ł͔ώG�ɂȂ邪�A��K�͊J���ł͕K�v�ƂȂ�
    app.value('messages', []);
    app.service('TimelineService', ['messages', function(messages){
        this.postMessage = function (message) {
            messages.push({
                message: message,
                postDateTime: new Date()
            });
        };
    }]);
    //Controlle��Service�̈ˑ����𒍓�����T���v��
        app.controller('TimelineController', ['messages','TimelineService', function(messages, timelineService) {
            this.messages = messages;
        this.message = '';

        this.postMessage = function(){
            timelineService.postMessage(this.message);
            this.message = '';
        };
    }]);

    // module�ɐV����Function(TimelineController)��ǉ�
    // Class�̊T�O�Ɏ��Ă���
/*
    app.controller('TimelineController', function() {
        //�p�����[�^��model�Ƃ��Ĉ���
        //ng-model="TimelineController�̕ʖ�.message"
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
*/
    //�����܂ł��ǉ����ꂽFunction


})();