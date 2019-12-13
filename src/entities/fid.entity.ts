import { IFid } from './../schemas/interfaces/ifid';
import { IFidEntity } from './interfaces/ifid.entity';

export class FidEntity implements IFid {
   public email: string;
   public localRealityId: number;
   public realityType: string;
   public state: string;
   public city: string;
   public totalArea: number;
   public floor: number;
   public floors: number;
   public price: number;
   public priceType: string;
   public wallType: string;
   public roomsCount: string;
   constructor(private fid: IFidEntity) {
       this.email = this.fid.email;
       this.localRealityId = this.fid.localRealityId;
       this.realityType = this.fid.realityType;
       this.state = this.fid.state;
       this.city = this.fid.city;
       this.totalArea = this.fid.totalArea;
       this.floor = this.fid.floor;
       this.floors = this.fid.floors;
       this.price = this.fid.price;
       this.priceType = this.fid.priceType;
       this.wallType = this.fid.wallType;
       this.roomsCount = this.fid.roomsCount;
    }
}
