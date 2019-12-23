import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    httpPut,
  } from 'inversify-express-utils';
import { IPriceTypesService } from '../services/interfaces/iprice.types.service';
import { SERVICE_TYPES } from '../services/types';

@controller('/price-types')
export class PriceTypesController {
    constructor(@inject(SERVICE_TYPES.IPriceTypesService) private priceTypesService: IPriceTypesService) {
        this.findAll.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    @httpGet('/')
    public async findAll(req: Request, res: Response): Promise<void> {
        await this.priceTypesService.findAll(req, res);
    }

    @httpPost('/')
    public async create(req: Request, res: Response): Promise<void> {
        await this.priceTypesService.create(req, res);
    }

    @httpPut('/:id')
    public async update(req: Request, res: Response): Promise<void> {
        await this.priceTypesService.update(req, res);
    }

    @httpDelete('/:id')
    public async delete(req: Request, res: Response): Promise<void> {
        await this.priceTypesService.delete(req, res);
    }
}
