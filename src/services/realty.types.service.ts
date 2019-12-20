import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { IRealtyTypesRepository } from '../repositories/interfaces/irealty.types.repository';
import { REPOSITORY_TYPES } from '../repositories/types';
import { IRealtyType } from '../schemas/interfaces/irealty.type';
import { IRealtyTypesService } from './interfaces/irealty.types.service';

@injectable()
export class RealtyTypesService implements IRealtyTypesService {
    constructor(
        @inject(REPOSITORY_TYPES.IRealtyTypesRepository) private realtyTypesRepository: IRealtyTypesRepository,
        @inject(MAPPER_TYPES.RealtyTypeMapper) private realtyTypeMapper: IMapRequestToEntity<Request, IRealtyType>,
    ) {}

    public findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.realtyTypesRepository.findAll());
        } catch {
            res.sendStatus(500);
        }
    }
    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const realtyTypeEntity = this.realtyTypeMapper.mapRequestToEntity(req);
            res.send(await this.realtyTypesRepository.create(realtyTypeEntity));
        } catch {
            res.sendStatus(500);
        }
    }
    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const realtyTypeEntity = this.realtyTypeMapper.mapRequestToEntity(req);
            res.send(await this.realtyTypesRepository.update(req.params.id, realtyTypeEntity));
        } catch {
            res.sendStatus(500);
        }
    }
    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.realtyTypesRepository.delete(req.params.id));
        } catch {
            res.sendStatus(500);
        }
    }
}
