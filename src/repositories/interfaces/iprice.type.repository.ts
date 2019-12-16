import { IPriceType } from '../../schemas/interfaces/iprice.type';
export interface IPriceTypeRepository {
    findAll(): Promise<IPriceType[]>;
    create(priceTypeEntity: IPriceType): Promise<IPriceType[]>;
    update(id: string, priceTypeEntity: IPriceType): Promise<IPriceType[]>;
    delete(id: string): Promise<IPriceType[]>;
}
