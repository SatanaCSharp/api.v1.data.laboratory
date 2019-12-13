import { IRealtyType } from './../schemas/interfaces/irealty.type';

export class RealtyTypeEntity implements IRealtyType {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
