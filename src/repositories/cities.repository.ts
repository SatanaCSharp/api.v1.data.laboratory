import { Model } from 'mongoose';
import { citySchema } from '../schemas/city.schema';
import { ICity } from '../schemas/interfaces/icity';
import { ICityModel } from '../schemas/interfaces/icity.model';
import { MongoConnectionService } from '../services/mongo.service';
import { ICitiesRepository } from './interfaces/icities.repository';

export class CitiesRepository implements ICitiesRepository {
    private City: Model<ICityModel>;

    constructor(mongoConnectionService: MongoConnectionService) {
        this.City = mongoConnectionService.connection.model('City', citySchema);
    }

    public findAll =  async (): Promise<ICity[]> => {
        return this.City.find({}, '_id name');
    }

    public create = async (cityEntity: ICity): Promise<ICity[]> => {
        await this.City.create(cityEntity);
        return this.findAll();
    }

    public update =  async (id: string, cityEntity: ICity): Promise<ICity[]> => {
        await this.City.findByIdAndUpdate({_id: id}, cityEntity);
        return this.findAll();
    }

    public delete = async (id: string): Promise<ICity[]> => {
        await this.City.findByIdAndRemove(id);
        return this.findAll();
    }

}
