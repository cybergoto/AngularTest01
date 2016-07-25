/**
 * SNS
 */
console.log(__dirname);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/messages', require('./api/messages'));

app.use('/', express.static(path.normalize(__dirname + '/../client')));

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Express server listening on port %s', port);
});