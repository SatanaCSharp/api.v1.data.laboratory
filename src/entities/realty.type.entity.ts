import { injectable } from 'inversify';
import { IRealtyType } from './../schemas/interfaces/irealty.type';

@injectable()
export class RealtyTypeEntity implements IRealtyType {
    public name?: string;
}
