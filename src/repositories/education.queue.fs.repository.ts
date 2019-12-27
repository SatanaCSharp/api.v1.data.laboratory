import fs from 'fs';
import { injectable } from 'inversify';
import path from 'path';
import {config} from '../config';
import { IEducationQueue } from './../schemas/interfaces/ieducation.queue';
import { IEducationQueueRepository } from './interfaces/ieducation.queue.repository';
@injectable()
export class EducationQueueFsRepository implements IEducationQueueRepository {
    // private path = config.FS_DATA_EDUCATION_QUEUE_PATH;
    private path: string ;
    constructor() {
        this.path = './dani-pro-chergi-ditei-u-doshkilni-navchalni-zakladi-stanom-na-01-12-2019.json';
    }
    public findAll = async (): Promise<IEducationQueue[]> => {
        const educationQueuesFs = fs.readFileSync(this.path, 'utf8');
        console.log(educationQueuesFs);
        const educationQueues: IEducationQueue[] = [];
        return educationQueues;
    }
}
