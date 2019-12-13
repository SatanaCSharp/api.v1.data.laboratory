import { Document } from 'mongoose';
import { IRealtyType } from './irealty.type';

export interface IRealtyTypeModel extends IRealtyType, Document {}
