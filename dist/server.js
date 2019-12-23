"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_express_utils_1 = require("inversify-express-utils");
var ioc_config_1 = require("./ioc/ioc.config");
var server = new inversify_express_utils_1.InversifyExpressServer(ioc_config_1.iocContainer, null, { rootPath: '/api/v1' });
exports.server = server;
//# sourceMappingURL=server.js.map