import { injectable } from 'inversify';
import { IAdvertType } from './../schemas/interfaces/iadvert.type';

@injectable()
export class AdvertTypeEntity implements IAdvertType {
    public name?: string;
}
