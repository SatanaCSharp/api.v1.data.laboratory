import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { IPriceType } from './../schemas/interfaces/iprice.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

@injectable()
export class PriceTypeMapper implements IMapRequestToEntity<Request, IPriceType> {
    constructor(@inject(ENTITY_TYPES.IPriceType) private priceTypeEntity: IPriceType) {}

    public mapRequestToEntity(req: Request): IPriceType {
        this.setName(req.body.name);
        return this.priceTypeEntity;
    }

    private setName(name: string) {
        if (name) {
            this.priceTypeEntity.name = name;
        }
    }
}
