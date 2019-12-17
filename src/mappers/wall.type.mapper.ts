import { Request } from 'express';
import { IWallType } from './../schemas/interfaces/iwall.type';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

export class WallTypeMapper implements IMapRequestToEntity<Request, IWallType> {

    constructor(private wallTypeEntity: IWallType) {}

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
