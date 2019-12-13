import { Document } from 'mongoose';
import { IPriceType } from './iprice.type';

export interface IPriceTypeModel extends IPriceType, Document {}
