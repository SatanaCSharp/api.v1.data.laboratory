"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = require("debug");
var inversify_1 = require("inversify");
var mongoose_1 = require("mongoose");
var config_1 = require("../config");
var MongoConnectionService = (function () {
    function MongoConnectionService(connectionString) {
        this.connectionString = connectionString || config_1.config.MONGO_CONNECTION_STRING;
        this.connection = mongoose_1.createConnection(this.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false,
            poolSize: 10,
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4,
        });
        this.debug = debug_1.debug('app:mongo');
        this.setupTriggers(this.connection);
        process.on('SIGINT', this.gracefulExit(this.connection))
            .on('SIGTERM', this.gracefulExit(this.connection));
    }
    MongoConnectionService.prototype.getConnection = function () {
        return this.connection;
    };
    MongoConnectionService.prototype.setupTriggers = function (connection) {
        var _this = this;
        connection.once('open', function () {
            _this.debug("mongodb connection created to " + _this.connectionString);
        })
            .on('disconnected', function () {
            _this.debug('mongo disconnected');
        })
            .on('reconnect', function () {
            _this.debug('mongo reconnected');
        })
            .on('error', function (error) {
            _this.debug("Warning " + error);
        });
    };
    MongoConnectionService.prototype.gracefulExit = function (connection) {
        var _this = this;
        return function () { return connection.close(function () {
            _this.debug("Mongoose connection :" + _this.connectionString + " is disconnected through app termination");
            process.exit(0);
        }); };
    };
    MongoConnectionService = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [String])
    ], MongoConnectionService);
    return MongoConnectionService;
}());
exports.MongoConnectionService = MongoConnectionService;
//# sourceMappingURL=mongo.service.js.map