"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./ioc/loader");
var bodyParser = require("body-parser");
var Debug = require("debug");
var createError = require("http-errors");
var logger = require("morgan");
var config_1 = require("./config");
var server_1 = require("./server");
var debug = Debug('app:server');
server_1.server.setConfig(function (_app) {
    _app.use(logger('dev'));
    _app.set('port', config_1.config.PORT);
    _app.use(bodyParser.json());
    _app.use(bodyParser.urlencoded({ extended: true }));
})
    .setErrorConfig(function (_app) {
    _app.use(function (req, res, next) {
        next(createError(404));
    });
    if (_app.get('env') === 'development') {
        _app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.json({
                error: err,
                message: err.message,
            });
        });
    }
    _app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: {},
            message: err.message,
        });
    });
});
var app = server_1.server.build();
exports.app = app;
app.listen(app.get('port'), function () {
    console.log("App is running at http://localhost:" + app.get('port') + " in " + app.get('env') + " mode");
    debug("App is running at http://localhost:" + app.get('port') + " in " + app.get('env') + " mode");
    debug('Press CTRL-C to stop');
});
//# sourceMappingURL=app.js.map