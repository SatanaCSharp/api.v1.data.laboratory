import { injectable } from 'inversify';
import { IState } from './../schemas/interfaces/istate';

@injectable()
export class StateEntity implements IState {
    public name?: string;
}
