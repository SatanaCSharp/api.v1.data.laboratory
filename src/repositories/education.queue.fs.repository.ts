import { readFileSync } from 'fs';
import { injectable } from 'inversify';
import {config} from '../config';
import { IEducationQueue } from './../schemas/interfaces/ieducation.queue';
import { IEducationQueueRepository } from './interfaces/ieducation.queue.repository';
@injectable()
export class EducationQueueFsRepository implements IEducationQueueRepository {
    private path: string ;
    constructor() {
        this.path =  config.FS_DATA_EDUCATION_QUEUE_PATH;
    }
    public findAll = async (): Promise<IEducationQueue[]> => {
        const educationQueuesFs = readFileSync(this.path, 'utf8');
        const educationQueues: IEducationQueue[] = JSON.parse(educationQueuesFs);
        return educationQueues;
    }
}
