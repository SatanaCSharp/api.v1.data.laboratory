import { Request } from 'express';
import { inject, injectable } from 'inversify';
import { ENTITY_TYPES } from '../entities/types';
import { IState } from './../schemas/interfaces/istate';
import { IMapRequestToEntity } from './interfaces/imap.request.to.enitity';

@injectable()
export class StateMapper implements IMapRequestToEntity<Request, IState> {
    constructor(@inject(ENTITY_TYPES.IState) private stateEntity: IState) {}

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
