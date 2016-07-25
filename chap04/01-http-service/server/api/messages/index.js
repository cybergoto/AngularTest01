/**
 * SNS
 * Messages Resource
 */
'use strict';

var messages = [];

var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    console.log('send messages : ' + JSON.stringify(messages));
    response.json(messages);
});

router.post('/', function (request, response) {
    var message = request.body;
    console.log('receive message : ' + JSON.stringify(message));
    messages.push(message);
    response.status(201).send('Created.');
});

module.exports = router;