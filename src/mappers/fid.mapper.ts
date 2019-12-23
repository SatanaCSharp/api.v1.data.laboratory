import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { IFid } from '../schemas/interfaces/ifid';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

@injectable()
export class FidMapper implements IMapRequestToEntity<Request, IFid> {
    constructor(@inject(ENTITY_TYPES.IFid) private fidEntity: IFid) {}

    public mapRequestToEntity(req: Request): IFid {
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
    }

    private setEmail(email: string) {
        if (email) {
            this.fidEntity.email = email;
        }
    }

    private setLocalRealtyId(localRealityId: number) {
        if (localRealityId) {
            this.fidEntity.localRealityId = localRealityId;
        }
    }

    private setRealityType(realityType: string) {
        if (realityType) {
            this.fidEntity.realityType = realityType;
        }
    }

    private setState(state: string) {
        if (state) {
            this.fidEntity.state = state;
        }
    }

    private setCity(city: string) {
        if (city) {
            this.fidEntity.city = city;
        }
    }

    private setTotalArea(totalArea: number) {
        if (totalArea || totalArea === 0) {
            this.fidEntity.totalArea = totalArea;
        }
    }
    private setFloor(floor: number) {
        if (floor || floor === 0) {
            this.fidEntity.floor = floor;
        }
    }

    private setFloors(floors: number) {
        if (floors || floors === 0) {
            this.fidEntity.floors = floors;
        }
    }

    private setPrice(price: number) {
        if (price || price === 0) {
            this.fidEntity.price = price;
        }
    }

    private setPriceType(priceType: string) {
        if (priceType) {
            this.fidEntity.priceType = priceType;
        }
    }

    private setWallType(wallType: string) {
        if (wallType) {
            this.fidEntity.wallType = wallType;
        }
    }

    private setRoomsCount(roomsCount: number) {
        if (roomsCount || roomsCount === 0) {
            this.fidEntity.roomsCount = roomsCount;
        }
    }

}
