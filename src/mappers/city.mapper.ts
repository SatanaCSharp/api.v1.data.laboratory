import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { ICity } from '../schemas/interfaces/icity';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

@injectable()
export class CityMapper implements IMapRequestToEntity<Request, ICity> {
    constructor(@inject(ENTITY_TYPES.ICity) private cityEntity: ICity) {}

    public mapRequestToEntity(req: Request): ICity {
        this.setName(req.body.name);
        return this.cityEntity;
    }

    private setName(name: string) {
        if (name) {
            this.cityEntity.name = name;
        }
    }
}
