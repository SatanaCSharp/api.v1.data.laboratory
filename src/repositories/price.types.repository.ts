import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import { IPriceType } from '../schemas/interfaces/iprice.type';
import { IPriceTypeModel } from '../schemas/interfaces/iprice.type.model';
import { priceTypeSchema } from '../schemas/price.type.schema';
import { MongoConnectionService } from '../services/mongo.service';
import { SERVICE_TYPES } from '../services/types';
import { IPriceTypesRepository } from './interfaces/iprice.types.repository';
@injectable()
export class PriceTypesRepository implements IPriceTypesRepository {
    private PriceType: Model<IPriceTypeModel>;
    constructor(@inject(SERVICE_TYPES.MongoConnectionService)mongoConnectionService: MongoConnectionService) {
        this.PriceType = mongoConnectionService.connection.model('PriceType', priceTypeSchema);
    }

    public findAll = async (): Promise<IPriceType[]>  => {
        return this.PriceType.find({});
    }

    public create = async (priceTypeEntity: IPriceType): Promise<IPriceType[]> => {
        await this.PriceType.create(priceTypeEntity);
        return this.findAll();
    }

    public update = async (id: string, priceTypeEntity: IPriceType): Promise<IPriceType[]> => {
        await this.PriceType.findByIdAndUpdate({_id: id}, priceTypeEntity);
        return this.findAll();
    }

    public delete = async (id: string): Promise<IPriceType[]>  => {
        await this.PriceType.findByIdAndRemove(id);
        return this.findAll();
    }
}
