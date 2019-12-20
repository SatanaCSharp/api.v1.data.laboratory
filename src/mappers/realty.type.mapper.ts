import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { IRealtyType } from './../schemas/interfaces/irealty.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

@injectable()
export class RealtyTypeMapper implements IMapRequestToEntity<Request, IRealtyType> {
    constructor(@inject(ENTITY_TYPES.IRealtyType) private realtyTypeEntity: IRealtyType) {}

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
