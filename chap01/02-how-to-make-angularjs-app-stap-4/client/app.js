/**
 * SNS
 */
(function () {
    'use strict';

    var app = angular.module('sns', []);

    // TODO メッセージを格納する配列を共有値messagesとして定義する

    // TODO TimelineServiceを作成し、postMessageメソッドを実装する
    // postMessageメソッドは、メッセージ・オブジェクトを共有値messagesに追加するように記述する

    // snsモジュールにTimelineControllerを追加
    // TODO 共有値messagesおよびTimelineServiceを引数に注入する
    app.controller('TimelineController', function () {

        // メッセージを格納する配列
        // TODO 空の配列の代わりに共有値messagesを割り当てる
        this.messages = [];

        // メッセージの入力欄と連動するプロパティ
        this.message = '';

        // messages配列にメッセージ・オブジェクトを格納するメソッド
        this.postMessage = function () {
            // 入力されたメッセージをオブジェクトに変換してmessages配列に追加
            // TODO TimelineServiceのpostMessageメソッドを呼び出すように修正する
            this.messages.push({
                message: this.message,      // 入力されたメッセージ
                postDateTime: new Date()    // 投稿日時（現在日時）
            });
            // 次の入力のための入力欄をクリア
            this.message = '';
        };

    });

})();