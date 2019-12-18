import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import { advertTypeSchema } from '../schemas/advert.type.schema';
import { IAdvertType } from '../schemas/interfaces/iadvert.type';
import { IAdvertTypeModel } from '../schemas/interfaces/iadvert.type.model';
import { MongoConnectionService } from '../services/mongo.service';
import { TYPES } from '../services/types';
import { IAdvertTypesRepository } from './interfaces/iadvert.types.repository';
@injectable()
export class AdvertTypesRepository implements IAdvertTypesRepository {
    private AdvertType: Model<IAdvertTypeModel>;
    constructor(@inject(TYPES.MongoConnectionService)mongoConnectionService: MongoConnectionService) {
        this.AdvertType = mongoConnectionService.connection.model('AdvertType', advertTypeSchema);
    }

    public findAll = async (): Promise<IAdvertType[]> => {
       return this.AdvertType.find({}, '_id name');
    }

    public create  = async (advertTypeEntity: IAdvertType): Promise<IAdvertType[]> => {
        await this.AdvertType.create(advertTypeEntity);
        return this.findAll();
    }

    public update = async (id: string, advertTypeEntity: IAdvertType): Promise<IAdvertType[]> => {
        await this.AdvertType.findByIdAndUpdate({_id: id}, advertTypeEntity);
        return this.findAll();
    }

    public delete = async (id: string): Promise<IAdvertType[]> => {
        await this.AdvertType.findByIdAndRemove(id);
        return this.findAll();
    }

}
