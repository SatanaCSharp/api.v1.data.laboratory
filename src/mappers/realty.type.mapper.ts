import { Request } from 'express';
import { IRealtyType } from './../schemas/interfaces/irealty.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

export class RealtyTypeMapper implements IMapRequestToEntity<Request, IRealtyType> {

    constructor(private realtyTypeEntity: IRealtyType) {}

    public mapRequestToEntity(req: Request): IRealtyType {
        this.setName(req.body.name);
        return this.realtyTypeEntity;
    }

    private setName(name: string) {
        if (name) {
            this.realtyTypeEntity.name = name;
        }
    }
}
