'use strict';

describe('snsモジュールの', function() {

    beforeEach(module('sns'));

    describe('messagesの', function() {
        it('初期状態', inject(['messages', function(messages) {
            expect(messages.length).toBe(0);
        }]));
    });

    describe('TimelineServiceに', function () {
        it('メッセージを1件追加した時', inject(['messages','TimelineService', function(messages, service){
            service.postMessage('テスト用メッセージ');
            expect(messages.length).toBe(1);
        }]));
    });

});
