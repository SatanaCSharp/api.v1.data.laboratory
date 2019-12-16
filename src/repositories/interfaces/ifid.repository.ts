import { IFid } from '../../schemas/interfaces/ifid';
export interface IFidRepository {
    findAll(): Promise<IFid[]>;
    show(id: string): Promise<IFid>;
    create(fidEntity: IFid): Promise<IFid[]>;
    update(id: string, fidEntity: IFid): Promise<IFid[]>;
    delete(id: string): Promise<IFid[]>;
}
