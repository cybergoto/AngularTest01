/**
 * SNS
 */
(function () {
    'use strict';

    var app = angular.module('sns', ['ui.router', 'ngMessages', 'prefecture', 'gender']);

    /**
     * HTML5モードを有効にするための設定
     */
    app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
      function ($urlRouterProvier, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvier.otherwise('/input');
        $stateProvider.state('input', {
          url: '/input',
          templateUrl: '/components/input.html'
        }).state('confirm', {
          url: '/confirm',
          templateUrl: '/components/confirm.html'
        }).state('complete', {
          url: '/complete',
          templateUrl: '/components/complete.html'
        });
      }
    ]);

    app.filter('yesno', function () {
        return (function (input) {
            return (input ? 'はい' : 'いいえ');
        });
    });

    /**
     * アプリケーション全体を制御するためのコントローラー
     */
    app.controller('AppController', function () {
        this.member = {};
    });

    /**
     * 入力ページ用コントローラー
     */
    app.controller('InputController', ['PREFECTURES', '$state', function (PREFECTURES, $state) {

        // 選択肢用の都道府県リストを公開
        this.PREFECTURES = PREFECTURES;

        // 現在日時を公開
        this.now = new Date();

        // 確認ページへ遷移
        this.confirm = function () {
            console.log('確認ページへ');
            $state.go('confirm');
        };

    }]);

    /**
     * 確認ページ用コントローラー
     */
    app.controller('ConfirmController', ['$state', function ($state) {

        // 完了ページへ遷移
        this.registration = function () {
            console.log('完了ページへ');
            $state.go('complete');
        };

        // 前のページへ遷移
        this.previous = function () {
            $state.go('input');
        }

    }]);

    /**
     * 完了ページ用コントローラー
     */
    app.controller('CompleteController', [function () {

    }]);

})();
