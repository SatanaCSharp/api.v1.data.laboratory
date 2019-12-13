import { Document } from 'mongoose';
import { IFid } from './ifid';

export interface IFidModel extends IFid, Document {}
