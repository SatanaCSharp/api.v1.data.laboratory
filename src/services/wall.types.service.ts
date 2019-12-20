import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { REPOSITORY_TYPES } from '../repositories/types';
import { IWallTypesRepository } from './../repositories/interfaces/iwall.types.repository';
import { IWallType } from './../schemas/interfaces/iwall.type';
import { IWallTypesService } from './interfaces/iwall.types.service';

@injectable()
export class WallTypesService implements IWallTypesService {
    constructor(
        @inject(REPOSITORY_TYPES.IWallTypesRepository) private wallTypesRepository: IWallTypesRepository,
        @inject(MAPPER_TYPES.WallTypeMapper) private wallTypeMapper: IMapRequestToEntity<Request, IWallType>,
    ) {}

    public findAll =  async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.wallTypesRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const wallTypeEntity = this.wallTypeMapper.mapRequestToEntity(req);
            res.send(await this.wallTypesRepository.create(wallTypeEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const wallTypeEntity = this.wallTypeMapper.mapRequestToEntity(req);
            res.send(await this.wallTypesRepository.update(req.params.id, wallTypeEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.wallTypesRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
}
