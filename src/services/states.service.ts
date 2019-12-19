import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { IStatesRepository } from '../repositories/interfaces/istates.repository';
import { TYPES } from '../repositories/types';
import { IState } from './../schemas/interfaces/istate';
import { IStatesService } from './interfaces/istates.service';

@injectable()
export class StatesService implements IStatesService {
    constructor(
        @inject(TYPES.IStatesRepository) private statesRepository: IStatesRepository,
        @inject(MAPPER_TYPES.StateMapper) private stateMapper: IMapRequestToEntity<Request, IState>,
    ) {}
    public findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.statesRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const stateEntity = this.stateMapper.mapRequestToEntity(req);
            res.send(await this.statesRepository.create(stateEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const stateEntity = this.stateMapper.mapRequestToEntity(req);
            res.send(await this.statesRepository.update(req.params.id, stateEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.statesRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
}
