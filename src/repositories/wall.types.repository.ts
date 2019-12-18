import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import { IWallType } from '../schemas/interfaces/iwall.type';
import { TYPES } from '../services/types';
import { IWallTypeModel } from './../schemas/interfaces/iwall.type.model';
import { wallTypeSchema } from './../schemas/wall.type.schema';
import { MongoConnectionService } from './../services/mongo.service';
import { IWallTypesRepository } from './interfaces/iwall.types.repository';
@injectable()
export class WallTypesRepository implements IWallTypesRepository {
    private WallType: Model<IWallTypeModel>;
    constructor(@inject(TYPES.MongoConnectionService)mongoConnectionService: MongoConnectionService) {
        this.WallType = mongoConnectionService.connection.model('WallType', wallTypeSchema);
    }

    public findAll = async (): Promise<IWallType[]> => {
        return this.WallType.find({});
    }

    public create = async (wallTypeEntity: IWallType): Promise<IWallType[]> => {
        await this.WallType.create(wallTypeEntity);
        return this.findAll();
    }

    public update = async (id: string, wallTypeEntity: IWallType): Promise<IWallType[]> => {
        await this.WallType.findByIdAndUpdate({_id: id}, wallTypeEntity);
        return this.findAll();
    }

    public delete = async (id: string): Promise<IWallType[]> => {
        await this.WallType.findByIdAndRemove(id);
        return this.findAll();
    }
}
