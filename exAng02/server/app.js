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

app.use('/', express.static(path.normalize(__dirname + '/../client')));
app.use('/', function (req, res, next) {
    res.redirect('/#' + req.path);
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Express server listening on port %s', port);
});
