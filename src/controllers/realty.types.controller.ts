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
import { IRealtyTypesService } from './../services/interfaces/irealty.types.service';

@controller('/realty-types')
export class RealtyTypesController {
    constructor(@inject(SERVICE_TYPES.IRealtyTypesService) private realtyTypesService: IRealtyTypesService) {
        this.findAll.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    @httpGet('/')
    public async findAll(req: Request, res: Response): Promise<void> {
        await this.realtyTypesService.findAll(req, res);
    }

    @httpPost('/')
    public async create(req: Request, res: Response): Promise<void> {
        await this.realtyTypesService.create(req, res);
    }

    @httpPut('/:id')
    public async update(req: Request, res: Response): Promise<void> {
        await this.realtyTypesService.update(req, res);
    }

    @httpDelete('/:id')
    public async delete(req: Request, res: Response): Promise<void> {
        await this.realtyTypesService.delete(req, res);
    }
}
