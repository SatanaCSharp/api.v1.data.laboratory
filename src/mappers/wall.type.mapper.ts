import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { IWallType } from './../schemas/interfaces/iwall.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

@injectable()
export class WallTypeMapper implements IMapRequestToEntity<Request, IWallType> {
    constructor(@inject(ENTITY_TYPES.IWallType) private wallTypeEntity: IWallType) {}

    public mapRequestToEntity(req: Request): IWallType {
        this.setName(req.body.name);
        return this.wallTypeEntity;
    }

    private setName(name: string) {
        if (name) {
            this.wallTypeEntity.name = name;
        }
    }
}
