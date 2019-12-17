import { Request } from 'express';
import { IAdvertType } from './../schemas/interfaces/iadvert.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

export class AdvertTypeMapper implements IMapRequestToEntity<Request, IAdvertType> {
    constructor(private advertTypeEntity: IAdvertType) {
    }

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
