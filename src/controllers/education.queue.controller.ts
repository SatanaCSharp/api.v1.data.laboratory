import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
    controller,
    httpGet,
  } from 'inversify-express-utils';
import { IEducationQueueService } from '../services/interfaces/ieducation.queue.service';
import { SERVICE_TYPES } from '../services/types';

@controller('/education-queue')
export class EducationQueueController {

    constructor(@inject(SERVICE_TYPES.IEducationQueueService) private educationQueueService: IEducationQueueService) {
        this.findAll.bind(this);
    }
    @httpGet('/')
    public async findAll(req: Request, res: Response) {
        await this.educationQueueService.findAll(res);
    }
}
