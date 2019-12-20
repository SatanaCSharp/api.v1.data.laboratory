import { injectable } from 'inversify';
import { IWallType } from './../schemas/interfaces/iwall.type';

@injectable()
export class WallTypeEntity implements IWallType {
    public name?: string;
}
