import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import { SERVICE_TYPES } from '../services/types';
import { IRealtyType } from './../schemas/interfaces/irealty.type';
import { IRealtyTypeModel } from './../schemas/interfaces/irealty.type.model';
import { realtyTypeSchema } from './../schemas/realty.type.schema';
import { MongoConnectionService } from './../services/mongo.service';
import { IRealtyTypesRepository } from './interfaces/irealty.types.repository';
@injectable()
export class RealtyTypesRepository implements IRealtyTypesRepository {
    private RealtyType: Model<IRealtyTypeModel>;
    constructor(@inject(SERVICE_TYPES.MongoConnectionService)mongoConnectionService: MongoConnectionService) {
        this.RealtyType = mongoConnectionService.connection.model('RealtyType', realtyTypeSchema);
    }

    public findAll = async (): Promise<IRealtyType[]> => {
       return this.RealtyType.find({});
    }
    public create = async (realtyTypeEntity: IRealtyType): Promise<IRealtyType[]> => {
        await this.RealtyType.create(realtyTypeEntity);
        return this.findAll();
    }
    public update = async (id: string, realtyTypeEntity: IRealtyType): Promise<IRealtyType[]> => {
        await this.RealtyType.findByIdAndUpdate({_id: id}, realtyTypeEntity);
        return this.findAll();
    }
    public delete = async (id: string): Promise<IRealtyType[]> => {
        await this.RealtyType.findByIdAndRemove(id);
        return this.findAll();
    }
}
