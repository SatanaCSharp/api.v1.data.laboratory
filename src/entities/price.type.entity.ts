import { IPriceType } from '../schemas/interfaces/iprice.type';

export class PriceTypeEntity implements IPriceType {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
