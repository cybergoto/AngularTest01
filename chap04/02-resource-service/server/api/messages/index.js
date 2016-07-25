/**
 * SNS
 * Messages Resource
 */
'use strict';

var messages = [];
var lastId = 1;

var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    console.log('send messages : ' + JSON.stringify(messages));
    response.json(messages);
});

router.get('/:id', function (request, response) {
    var id = Number(request.params.id);
    var filteredMessages = messages.filter(function (message) {
        return (message.id === id);
    });
    if (filteredMessages.length === 1) {
        console.log('send message : ' + JSON.stringify(filteredMessages[0]));
        response.json(filteredMessages[0]);
    } else {
        response.status(404).end();
    }
});

router.post('/', function (request, response) {
    var message = request.body;
    message.id = lastId++;
    message.postDateTime = new Date();
    console.log('receive message : ' + JSON.stringify(message))
    messages.push(message);
    response.redirect('/api/messages/' + message.id);
});

router.delete('/:id', function (request, response) {
    var id = Number(request.params.id);
    var filteredMessages = messages.filter(function (message) {
        return (message.id === id);
    });
    if (filteredMessages.length === 1) {
        console.log('remove message : ' + JSON.stringify(filteredMessages[0]));
        messages = messages.filter(function (message) {
            return (message.id !== id);
        });
        response.sendStatus(200);
    } else {
        response.status(404).end();
    }
});

module.exports = router;