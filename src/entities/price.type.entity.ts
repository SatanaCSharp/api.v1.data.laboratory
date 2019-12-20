import { injectable } from 'inversify';
import { IPriceType } from '../schemas/interfaces/iprice.type';

@injectable()
export class PriceTypeEntity implements IPriceType {
    public name?: string;
}
