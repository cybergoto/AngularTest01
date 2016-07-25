/**
 * SNS
 */
(function () {
    'use strict';

    // angluarJSはmodule単位でApplicationとなる
    // 'sns'はhtmlのng-appと合わせておく
    var app = angular.module('sns', []);

    //Service利用のサンプル
    //シンプルなコードでは煩雑になるが、大規模開発では必要となる
    app.value('messages', []);
    app.service('TimelineService', ['messages', function(messages){
        this.postMessage = function (message) {
            messages.push({
                message: message,
                postDateTime: new Date()
            });
        };
    }]);
    //ControlleへServiceの依存性を注入するサンプル
        app.controller('TimelineController', ['messages','TimelineService', function(messages, timelineService) {
            this.messages = messages;
        this.message = '';

        this.postMessage = function(){
            timelineService.postMessage(this.message);
            this.message = '';
        };
    }]);

    // moduleに新しいFunction(TimelineController)を追加
    // Classの概念に似ている
/*
    app.controller('TimelineController', function() {
        //パラメータはmodelとして扱う
        //ng-model="TimelineControllerの別名.message"
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
    //ここまでが追加されたFunction


})();