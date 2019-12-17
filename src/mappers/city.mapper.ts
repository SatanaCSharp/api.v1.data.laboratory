import { Request } from 'express';
import { ICity } from '../schemas/interfaces/icity';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

export class CityMapper implements IMapRequestToEntity<Request, ICity> {
    constructor(private cityEntity: ICity) {}

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
