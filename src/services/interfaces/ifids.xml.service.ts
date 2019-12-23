import {Request, Response} from 'express';

export interface IFidsXmlService {
    getFidXml(req: Request, res: Response): Promise<void>;
}
