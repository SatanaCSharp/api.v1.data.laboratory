import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { IPriceTypesRepository } from '../repositories/interfaces/iprice.types.repository';
import { REPOSITORY_TYPES } from '../repositories/types';
import { IPriceType } from '../schemas/interfaces/iprice.type';
import { IPriceTypesService } from './interfaces/iprice.types.service';

@injectable()
export class PriceTypesService implements IPriceTypesService {
    constructor(
        @inject(REPOSITORY_TYPES.IPriceTypesRepository) private priceTypesRepository: IPriceTypesRepository,
        @inject(MAPPER_TYPES.PriceTypeMapper) private priceTypeMapper: IMapRequestToEntity<Request, IPriceType>,
    ) {}

    public findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.priceTypesRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const priceTypeEntity = this.priceTypeMapper.mapRequestToEntity(req);
            res.send(await this.priceTypesRepository.create(priceTypeEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public  update = async (req: Request, res: Response): Promise<void> => {
        try {
            const priceTypeEntity = this.priceTypeMapper.mapRequestToEntity(req);
            res.send(await this.priceTypesRepository.update(req.params.id, priceTypeEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.priceTypesRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }

}
