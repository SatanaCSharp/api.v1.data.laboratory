import {Request, Response} from 'express';
import {inject, injectable} from 'inversify';
import * as xmlBuilder from 'xmlbuilder';
import {IFidsRepository} from '../repositories/interfaces/ifids.repository';
import {REPOSITORY_TYPES} from '../repositories/types';
import {IFid} from '../schemas/interfaces/ifid';
import {IFidsXmlService} from './interfaces/ifids.xml.service';
@injectable()
export class FidXmlService implements IFidsXmlService {
    constructor(@inject(REPOSITORY_TYPES.IFidsRepository) private fidsRepository: IFidsRepository) {}

    public getFidXml = async (req: Request, res: Response): Promise<void> => {
        const fid: IFid = await  this.getFidById(req.params.id);
        const fidXml = await this.buildXml(fid);
        res.send(fidXml);
    }

    private getFidById =  async (id: string): Promise<IFid> => {
        return this.fidsRepository.show(id);
    }

    private buildXml = async (fid: IFid) => {
        return xmlBuilder.create('realties', { encoding: 'utf-8' })
            .att('xmlns', 'https://dom.ria.com/xml/xsd/')
            .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
            .att('xsi:schemaLocation', 'https://dom.ria.com/xml/xsd/https://dom.ria.com/xml/xsd/dom.xsd')
            .ele('email', fid.email).up()
            .ele('localRealityId', fid.localRealityId).up()
            .ele('realityType', fid.realityType).up()
            .ele('state', fid.state).up()
            .ele('city', fid.city).up()
            .ele('totalArea', fid.totalArea).up()
            .ele('floor', fid.floor).up()
            .ele('floors', fid.floors).up()
            .ele('price', fid.price).up()
            .ele('priceType', fid.priceType).up()
            .ele('wallType', fid.wallType).up()
            .ele('roomsCount', fid.roomsCount).up()
            .end({ pretty: true });
    }
}
