import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    httpPut,
  } from 'inversify-express-utils';
import { SERVICE_TYPES } from '../services/types';
import { IStatesService } from './../services/interfaces/istates.service';

@controller('/states')
export class StatesController {
    constructor(@inject(SERVICE_TYPES.IStatesService) private statesService: IStatesService) {
        this.findAll.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    @httpGet('/')
    public async findAll(req: Request, res: Response): Promise<void> {
        await this.statesService.findAll(req, res);
    }

    @httpPost('/')
    public async create(req: Request, res: Response): Promise<void> {
        await this.statesService.create(req, res);
    }

    @httpPut('/:id')
    public async update(req: Request, res: Response): Promise<void> {
        await this.statesService.update(req, res);
    }

    @httpDelete('/:id')
    public async delete(req: Request, res: Response): Promise<void> {
        await this.statesService.delete(req, res);
    }
}
