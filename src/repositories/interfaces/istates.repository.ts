import { IState } from '../../schemas/interfaces/istate';

export interface IStatesRepository {
    findAll(): Promise<IState[]>;
    create(stateEntity: IState): Promise<IState[]>;
    update(id: string, stateEntity: IState): Promise<IState[]>;
    delete(id: string): Promise<IState[]>;
}
