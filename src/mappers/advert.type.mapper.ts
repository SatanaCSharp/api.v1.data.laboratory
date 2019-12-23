import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { IAdvertType } from './../schemas/interfaces/iadvert.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';
@injectable()
export class AdvertTypeMapper implements IMapRequestToEntity<Request, IAdvertType> {
    constructor(@inject(ENTITY_TYPES.IAdvertType) private advertTypeEntity: IAdvertType) {}

    public mapRequestToEntity(req: Request): IAdvertType {
        this.setName(req.body.name);
        return this.advertTypeEntity;
    }

    private setName(name: string) {
        if (name) {
            this.advertTypeEntity.name = name;
        }
    }
}
