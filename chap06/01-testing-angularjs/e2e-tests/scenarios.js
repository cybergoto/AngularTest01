'use strict';

describe('sns', function() {

  describe('トップページ', function () {

    beforeEach(function () {
      browser.get('/');
    });

    it('タイトル', function () {
      expect(element.all(by.css('h1')).first().getText()).toBe('タイムライン');
    });

    describe('メッセージ入力欄', function () {

      it('初期状態', function () {
        expect(element(by.id('sns-message-field')).getText()).toBe('');
      });

    });

    describe('残り文字数', function () {

      it('5文字入力すると', function () {
        element(by.id('sns-message-field')).sendKeys('こんにちは');
        expect(element(by.id('sns-message-length')).getText()).toBe('残り135文字');
      });

    });

    describe('投稿ボタン', function () {

      it('メッセージを入力してボタンをクリック', function () {
        element(by.id('sns-message-field')).sendKeys('こんにちは');
        element(by.id('sns-post-button')).click();
        console.log(element.all(by.css('.sns-message')));
        expect(element.all(by.css('.sns-message')).first().getText()).toBe('こんにちは');
        expect(element(by.id('sns-message-field')).getText()).toBe('');
      });

    });

  });

});
