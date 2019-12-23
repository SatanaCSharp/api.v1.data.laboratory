import { injectable } from 'inversify';
import { IFid } from '../schemas/interfaces/ifid';

@injectable()
export class FidEntity implements IFid {
   public email?: string;
   public localRealityId?: number;
   public realityType?: string;
   public state?: string;
   public city?: string;
   public totalArea?: number;
   public floor?: number;
   public floors?: number;
   public price?: number;
   public priceType?: string;
   public wallType?: string;
   public roomsCount?: number;
}
