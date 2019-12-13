import { Document } from 'mongoose';
import { IAdvertType } from './iadvert.type';

export interface IAdvertTypeModel extends IAdvertType, Document {}
