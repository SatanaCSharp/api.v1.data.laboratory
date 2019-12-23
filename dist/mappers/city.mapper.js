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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("../entities/types");
var CityMapper = (function () {
    function CityMapper(cityEntity) {
        this.cityEntity = cityEntity;
    }
    CityMapper.prototype.mapRequestToEntity = function (req) {
        this.setName(req.body.name);
        return this.cityEntity;
    };
    CityMapper.prototype.setName = function (name) {
        if (name) {
            this.cityEntity.name = name;
        }
    };
    CityMapper = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.ENTITY_TYPES.ICity)),
        __metadata("design:paramtypes", [Object])
    ], CityMapper);
    return CityMapper;
}());
exports.CityMapper = CityMapper;
//# sourceMappingURL=city.mapper.js.map