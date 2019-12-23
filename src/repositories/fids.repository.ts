import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import { fidSchema } from '../schemas/fid.schema';
import { IFid } from '../schemas/interfaces/ifid';
import { IFidModel } from '../schemas/interfaces/ifid.model';
import { MongoConnectionService } from '../services/mongo.service';
import { SERVICE_TYPES } from '../services/types';
import { IFidsRepository } from './interfaces/ifids.repository';

@injectable()
export class FidsRepository implements IFidsRepository {
    private Fid: Model<IFidModel>;
    constructor(@inject(SERVICE_TYPES.MongoConnectionService)mongoConnectionService: MongoConnectionService) {
        this.Fid = mongoConnectionService.connection.model('Fid', fidSchema);
    }

    public findAll = async (): Promise<IFid[]> => {
        return this.Fid.find({});
    }

    public show = async (id: string): Promise<IFid> => {
        return this.Fid.findById(id);
    }

    public create = async (fidEntity: IFid): Promise<IFid[]> => {
        await this.Fid.create(fidEntity);
        return this.findAll();
    }

    public update  = async (id: string, fidEntity: IFid): Promise<IFid[]> => {
        await this.Fid.findByIdAndUpdate({_id: id}, fidEntity);
        return this.findAll();
    }

    public delete = async (id: string): Promise<IFid[]> => {
        await this.Fid.findByIdAndRemove(id);
        return this.findAll();
    }
}
