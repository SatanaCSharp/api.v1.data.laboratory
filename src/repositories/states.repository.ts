import { inject, injectable } from 'inversify';
import { Model } from 'mongoose';
import { TYPES } from '../services/types';
import { IState } from './../schemas/interfaces/istate';
import { IStateModel } from './../schemas/interfaces/istate.model';
import { stateSchema } from './../schemas/state.schema';
import { MongoConnectionService } from './../services/mongo.service';
import { IStatesRepository } from './interfaces/istates.repository';
@injectable()
export class StatesRepository implements IStatesRepository {
    private State: Model<IStateModel>;
    constructor(@inject(TYPES.MongoConnectionService)mongoConnectionService: MongoConnectionService) {
        this.State = mongoConnectionService.connection.model('State', stateSchema);
    }

    public findAll = async (): Promise<IState[]> => {
        return this.State.find({});
    }

    public create = async (stateEntity: IState): Promise<IState[]> => {
        await this.State.create(stateEntity);
        return this.findAll();
    }

    public update = async (id: string, stateEntity: IState): Promise<IState[]> => {
        await this.State.findByIdAndUpdate({_id: id}, stateEntity);
        return this.findAll();
    }

    public delete = async (id: string): Promise<IState[]> => {
        await this.State.findByIdAndRemove(id);
        return this.findAll();
    }

}
