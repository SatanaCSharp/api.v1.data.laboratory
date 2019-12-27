import { IEducationQueue } from './../../schemas/interfaces/ieducation.queue';

export interface IEducationQueueRepository {
    findAll(): Promise<IEducationQueue[]>;
}
