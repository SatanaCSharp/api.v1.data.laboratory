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
import { IFidsService } from './../services/interfaces/ifids.service';

@controller('/fids')
export class FidsController {
    constructor(@inject(SERVICE_TYPES.IFidsService) private fidsService: IFidsService) {
        this.findAll.bind(this);
        this.show.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    @httpGet('/')
    public async findAll(req: Request, res: Response): Promise<void> {
        await this.fidsService.findAll(req, res);
    }

    @httpGet('/:id')
    public async show(req: Request, res: Response): Promise<void> {
        await this.fidsService.show(req, res);
    }

    @httpPost('/')
    public async create(req: Request, res: Response): Promise<void> {
        await this.fidsService.create(req, res);
    }

    @httpPut('/:id')
    public async update(req: Request, res: Response): Promise<void> {
        await this.fidsService.update(req, res);
    }

    @httpDelete('/:id')
    public async delete(req: Request, res: Response): Promise<void> {
        await this.fidsService.delete(req, res);
    }
}
