import { IState } from './../schemas/interfaces/istate';

export class StateEntity implements IState {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}
