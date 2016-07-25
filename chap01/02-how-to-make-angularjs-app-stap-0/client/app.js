/**
 * SNS
 */
(function () {
    'use strict';

    // angluarJS‚Ímodule’PˆÊ‚ÅApplication‚Æ‚È‚é
    // 'sns'‚Íhtml‚Ìng-app‚Æ‡‚í‚¹‚Ä‚¨‚­
    var app = angular.module('sns', []);
    // module‚ÉV‚µ‚¢Function(TimelineController)‚ğ’Ç‰Á
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
    //‚±‚±‚Ü‚Å‚ª’Ç‰Á‚³‚ê‚½Function
})();