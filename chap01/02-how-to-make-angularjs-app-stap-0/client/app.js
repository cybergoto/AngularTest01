/**
 * SNS
 */
(function () {
    'use strict';

    // angluarJSはmodule単位でApplicationとなる
    // 'sns'はhtmlのng-appと合わせておく
    var app = angular.module('sns', []);
    // moduleに新しいFunction(TimelineController)を追加
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
    //ここまでが追加されたFunction
})();