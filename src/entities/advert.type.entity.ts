import { IAdvertType } from './../schemas/interfaces/iadvert.type';

export class AdvertTypeEntity implements IAdvertType {
    public name: string;
    constructor() {
        this.name = '';
    }
}
