import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { IAdvertTypesRepository } from '../repositories/interfaces/iadvert.types.repository';
import { TYPES } from '../repositories/types';
import { IAdvertType } from './../schemas/interfaces/iadvert.type';
import { IAdvertTypesService } from './interfaces/iadvert.types.service';
@injectable()
export class AdvertTypesService implements IAdvertTypesService {
    constructor(
        @inject(TYPES.IAdvertTypesRepository) private advertTypesRepository: IAdvertTypesRepository,
        @inject(MAPPER_TYPES.AdvertTypeMapper) private advertTypesMapper: IMapRequestToEntity<Request, IAdvertType>,
    ) {}

    public findAll =  async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.advertTypesRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const advertTypeEntity = this.advertTypesMapper.mapRequestToEntity(req);
            res.send(await this.advertTypesRepository.create(advertTypeEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const advertTypeEntity = this.advertTypesMapper.mapRequestToEntity(req);
            res.send(await this.advertTypesRepository.update(req.params.id, advertTypeEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.advertTypesRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }
}
