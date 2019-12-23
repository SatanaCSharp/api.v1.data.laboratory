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
import { IWallTypesService } from './../services/interfaces/iwall.types.service';

@controller('/wall-types')
export class WallTypesController {
    constructor(@inject(SERVICE_TYPES.IWallTypesService) private wallTypesService: IWallTypesService) {
        this.findAll.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    @httpGet('/')
    public async findAll(req: Request, res: Response): Promise<void> {
        await this.wallTypesService.findAll(req, res);
    }

    @httpPost('/')
    public async create(req: Request, res: Response): Promise<void> {
        await this.wallTypesService.create(req, res);
    }

    @httpPut('/:id')
    public async update(req: Request, res: Response): Promise<void> {
        await this.wallTypesService.update(req, res);
    }

    @httpDelete('/:id')
    public async delete(req: Request, res: Response): Promise<void> {
        await this.wallTypesService.delete(req, res);
    }
}
