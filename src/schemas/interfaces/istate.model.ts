import { Document } from 'mongoose';
import { IState } from './istate';

export interface IStateModel extends IState, Document {}
