import { IAdvertType } from '../../schemas/interfaces/iadvert.type';

export interface IAdvertTypesRepository {
    findAll(): Promise<IAdvertType[]>;
    create(advertTypeEntity: IAdvertType): Promise<IAdvertType[]>;
    update(id: string, advertTypeEntity: IAdvertType): Promise<IAdvertType[]>;
    delete(id: string): Promise<IAdvertType[]>;
}
