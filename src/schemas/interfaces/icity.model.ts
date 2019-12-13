import { Document } from 'mongoose';
import { ICity } from './icity';

export interface ICityModel extends ICity, Document {}
