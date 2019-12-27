import { Response } from 'express';
export interface IEducationQueueService {
    findAll(res: Response): Promise<void>;
}
