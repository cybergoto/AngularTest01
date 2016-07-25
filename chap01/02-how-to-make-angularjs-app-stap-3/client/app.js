/**
 * SNS
 */
(function () {
    'use strict';

    var app = angular.module('sns', []);

    // snsモジュールにTimelineControllerを追加
    app.controller('TimelineController', function () {

        // メッセージを格納する配列
        this.messages = [];

        // メッセージの入力欄と連動するプロパティ
        this.message = '';

        // messages配列にメッセージ・オブジェクトを格納するメソッド
        this.postMessage = function () {
            // 入力されたメッセージをオブジェクトに変換してmessages配列に追加
            this.messages.push({
                message: this.message,      // 入力されたメッセージ
                postDateTime: new Date()    // 投稿日時（現在日時）
            });
            // 次の入力のための入力欄をクリア
            this.message = '';
        };

    });

})();