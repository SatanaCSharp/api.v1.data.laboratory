"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.fidSchema = new mongoose_1.Schema({
    email: String,
    localRealityId: Number,
    realityType: String,
    state: String,
    city: String,
    totalArea: Number,
    floor: Number,
    floors: Number,
    price: Number,
    priceType: String,
    wallType: String,
    roomsCount: Number,
});
//# sourceMappingURL=fid.schema.js.map