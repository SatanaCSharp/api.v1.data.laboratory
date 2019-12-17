import { Model } from 'mongoose';
import { IRealtyType } from './../schemas/interfaces/irealty.type';
import { IRealtyTypeModel } from './../schemas/interfaces/irealty.type.model';
import { realtyTypeSchema } from './../schemas/realty.type.schema';
import { MongoConnectionService } from './../services/mongo.service';
import { IRealtyTypesRepository } from './interfaces/irealty.types.repository';

export class RealtyTypesRepository implements IRealtyTypesRepository {
    private RealtyType: Model<IRealtyTypeModel>;
    constructor(mongoConnectionService: MongoConnectionService) {
        this.RealtyType = mongoConnectionService.connection.model('RealtyType', realtyTypeSchema);
    }

    public findAll = async (): Promise<IRealtyType[]> => {
       return this.RealtyType.find({});
    }
    public create = async (realtyTypeEntity: IRealtyType): Promise<IRealtyType[]> => {
        return this.findAll();
    }
    public update = async (id: string, realtyTypeEntity: IRealtyType): Promise<IRealtyType[]> => {
        return this.findAll();
    }
    public delete = async (id: string): Promise<IRealtyType[]> => {
        return this.findAll();
    }
}
