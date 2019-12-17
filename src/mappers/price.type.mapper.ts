import { Request } from 'express';
import { IPriceType } from './../schemas/interfaces/iprice.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

export class PriceTypeMapper implements IMapRequestToEntity<Request, IPriceType> {

    constructor(private priceTypeEntity: IPriceType) {}

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
