"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    IP: process.env.NODEJS_IP || '127.0.0.1',
    PORT: process.env.PORT || normalizePort('5000'),
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/lab_data',
};
exports.config = config;
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return 0;
}
exports.normalizePort = normalizePort;
if (process.env.NODE_ENV === 'test') {
    exports.config = config = __assign({}, config);
}
//# sourceMappingURL=config.js.map