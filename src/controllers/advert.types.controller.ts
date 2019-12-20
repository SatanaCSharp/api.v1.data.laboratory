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
import { IAdvertTypesService } from './../services/interfaces/iadvert.types.service';

@controller('/advert-types')
export class AdvertTypesController {
    constructor(@inject(SERVICE_TYPES.IAdvertTypesService) private advertTypesService: IAdvertTypesService) {
        this.findAll.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    @httpGet('/')
    public async findAll(req: Request, res: Response): Promise<void> {
        await this.advertTypesService.findAll(req, res);
    }

    @httpPost('/')
    public async create(req: Request, res: Response): Promise<void> {
        await this.advertTypesService.create(req, res);
    }

    @httpPut('/:id')
    public async update(req: Request, res: Response): Promise<void> {
        await this.advertTypesService.update(req, res);
    }

    @httpDelete('/:id')
    public async delete(req: Request, res: Response): Promise<void> {
        await this.advertTypesService.delete(req, res);
    }
}
