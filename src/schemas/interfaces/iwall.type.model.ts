import { Document } from 'mongoose';
import { IWallType } from './iwall.type';

export interface IWallTypeModel extends IWallType, Document {}
