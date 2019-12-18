import { Request, Response } from 'express';
export interface IFidsService {
    findAll(req: Request, res: Response): Promise<void>;
    show(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
