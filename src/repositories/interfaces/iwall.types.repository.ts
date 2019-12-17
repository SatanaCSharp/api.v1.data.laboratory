import { IWallType } from '../../schemas/interfaces/iwall.type';

export interface IWallTypesRepository {
    findAll(): Promise<IWallType[]>;
    create(wallTypeEntity: IWallType): Promise<IWallType[]>;
    update(id: string, wallTypeEntity: IWallType): Promise<IWallType[]>;
    delete(id: string): Promise<IWallType[]>;
}
