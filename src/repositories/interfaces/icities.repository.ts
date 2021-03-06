import { ICity } from '../../schemas/interfaces/icity';

export interface ICitiesRepository {
    findAll(): Promise<ICity[]>;
    create(cityEntity: ICity): Promise<ICity[]>;
    update(id: string, cityEntity: ICity): Promise<ICity[]>;
    delete(id: string): Promise<ICity[]>;
}
