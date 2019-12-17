import { Request } from 'express';
import { IState } from './../schemas/interfaces/istate';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

export class StateMapper implements IMapRequestToEntity<Request, IState> {

    constructor(private stateEntity: IState) {}

    public mapRequestToEntity(req: Request): IState {
        this.setName(req.body.name);
        return this.stateEntity;
    }

    private setName(name: string) {
        if (name) {
            this.stateEntity.name = name;
        }
    }
}
