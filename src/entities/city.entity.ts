import { ICity } from './../schemas/interfaces/icity';

export class CityEntity implements ICity {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
