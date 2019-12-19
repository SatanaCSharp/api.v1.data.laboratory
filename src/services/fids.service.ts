import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { TYPES } from '../repositories/types';
import { IFid } from '../schemas/interfaces/ifid';
import { IFidsRepository } from './../repositories/interfaces/ifids.repository';
import { IFidsService } from './interfaces/ifids.service';

@injectable()
export class FidsService implements IFidsService {
    constructor(
        @inject(TYPES.IFidsRepository) private fidsRepository: IFidsRepository,
        @inject(MAPPER_TYPES.FidMapper) private fidMapper: IMapRequestToEntity<Request, IFid>,
    ) {}

    public findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.fidsRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public show = async (req: Request, res: Response): Promise<void>  => {
        try {
            res.send(await this.fidsRepository.show(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const fidEntity = this.fidMapper.mapRequestToEntity(req);
            res.send(await this.fidsRepository.create(fidEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const fidEntity = this.fidMapper.mapRequestToEntity(req);
            res.send(await this.fidsRepository.update(req.params.id, fidEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.fidsRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }

}
