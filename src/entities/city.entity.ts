import { injectable } from 'inversify';
import { ICity } from './../schemas/interfaces/icity';

@injectable()
export class CityEntity implements ICity {
    public name?: string;
}
