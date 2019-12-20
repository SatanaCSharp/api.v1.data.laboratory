import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { IMapRequestToEntity } from '../mappers/interfaces/imap.request.to.enitity';
import { MAPPER_TYPES } from '../mappers/types';
import { ICitiesRepository } from '../repositories/interfaces/icities.repository';
import { REPOSITORY_TYPES } from '../repositories/types';
import { ICity } from './../schemas/interfaces/icity';
import { ICitiesService } from './interfaces/icities.service';

@injectable()
export class CitiesService implements ICitiesService {
    constructor(
        @inject(REPOSITORY_TYPES.ICitiesRepository) private citiesRepository: ICitiesRepository,
        @inject(MAPPER_TYPES.CityMapper) private cityMapper: IMapRequestToEntity<Request, ICity>,
    ) {}

    public findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.citiesRepository.findAll());
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const cityEntity = this.cityMapper.mapRequestToEntity(req);
            res.send(await this.citiesRepository.create(cityEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }

    public update = async (req: Request, res: Response): Promise<void> => {
        try {
            const cityEntity = this.cityMapper.mapRequestToEntity(req);
            res.send(await this.citiesRepository.update(req.params.id, cityEntity));
        } catch (err) {
            res.sendStatus(500);
        }
    }
    public delete = async (req: Request, res: Response): Promise<void> => {
        try {
            res.send(await this.citiesRepository.delete(req.params.id));
        } catch (err) {
            res.sendStatus(500);
        }
    }

}
