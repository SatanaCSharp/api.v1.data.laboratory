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
var FidMapper = (function () {
    function FidMapper(fidEntity) {
        this.fidEntity = fidEntity;
    }
    FidMapper.prototype.mapRequestToEntity = function (req) {
        this.setEmail(req.body.email);
        this.setLocalRealtyId(req.body.localRealityId);
        this.setRealityType(req.body.realityType);
        this.setState(req.body.state);
        this.setCity(req.body.city);
        this.setTotalArea(req.body.totalArea);
        this.setFloor(req.body.floor);
        this.setFloors(req.body.floors);
        this.setPrice(req.body.price);
        this.setPriceType(req.body.priceType);
        this.setWallType(req.body.wallType);
        this.setRoomsCount(req.body.roomsCount);
        return this.fidEntity;
    };
    FidMapper.prototype.setEmail = function (email) {
        if (email) {
            this.fidEntity.email = email;
        }
    };
    FidMapper.prototype.setLocalRealtyId = function (localRealityId) {
        if (localRealityId) {
            this.fidEntity.localRealityId = localRealityId;
        }
    };
    FidMapper.prototype.setRealityType = function (realityType) {
        if (realityType) {
            this.fidEntity.realityType = realityType;
        }
    };
    FidMapper.prototype.setState = function (state) {
        if (state) {
            this.fidEntity.state = state;
        }
    };
    FidMapper.prototype.setCity = function (city) {
        if (city) {
            this.fidEntity.city = city;
        }
    };
    FidMapper.prototype.setTotalArea = function (totalArea) {
        if (totalArea || totalArea === 0) {
            this.fidEntity.totalArea = totalArea;
        }
    };
    FidMapper.prototype.setFloor = function (floor) {
        if (floor || floor === 0) {
            this.fidEntity.floor = floor;
        }
    };
    FidMapper.prototype.setFloors = function (floors) {
        if (floors || floors === 0) {
            this.fidEntity.floors = floors;
        }
    };
    FidMapper.prototype.setPrice = function (price) {
        if (price || price === 0) {
            this.fidEntity.price = price;
        }
    };
    FidMapper.prototype.setPriceType = function (priceType) {
        if (priceType) {
            this.fidEntity.priceType = priceType;
        }
    };
    FidMapper.prototype.setWallType = function (wallType) {
        if (wallType) {
            this.fidEntity.wallType = wallType;
        }
    };
    FidMapper.prototype.setRoomsCount = function (roomsCount) {
        if (roomsCount || roomsCount === 0) {
            this.fidEntity.roomsCount = roomsCount;
        }
    };
    FidMapper = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.ENTITY_TYPES.IFid)),
        __metadata("design:paramtypes", [Object])
    ], FidMapper);
    return FidMapper;
}());
exports.FidMapper = FidMapper;
//# sourceMappingURL=fid.mapper.js.map