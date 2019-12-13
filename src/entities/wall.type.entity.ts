import { IWallType } from './../schemas/interfaces/iwall.type';

export class WallTypeEntity implements IWallType {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
