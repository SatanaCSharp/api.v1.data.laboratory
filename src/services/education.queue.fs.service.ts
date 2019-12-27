import { Response } from 'express';
import { inject, injectable } from 'inversify';
import { IEducationQueueRepository } from '../repositories/interfaces/ieducation.queue.repository';
import { REPOSITORY_TYPES } from '../repositories/types';
import { IEducationQueueService } from './interfaces/ieducation.queue.service';

@injectable()
export class EducationQueueFsService implements IEducationQueueService {
    constructor(@inject(REPOSITORY_TYPES.IEducationQueueRepository) private educationQueueRepository: IEducationQueueRepository) {}
    public findAll = async (res: Response): Promise<void> => {
        try {
            console.log('1');
            res.send(await this.educationQueueRepository.findAll());
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}
