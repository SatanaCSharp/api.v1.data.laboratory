import { IRealtyType } from '../../schemas/interfaces/irealty.type';

export interface IRealtyTypesRepository {
    findAll(): Promise<IRealtyType[]>;
    create(realtyTypeEntity: IRealtyType): Promise<IRealtyType[]>;
    update(id: string, realtyTypeEntity: IRealtyType): Promise<IRealtyType[]>;
    delete(id: string): Promise<IRealtyType[]>;
}
