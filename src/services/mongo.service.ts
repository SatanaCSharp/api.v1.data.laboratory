import {  debug, IDebugger } from 'debug';
import { injectable } from 'inversify';
import { Connection, createConnection } from 'mongoose';
import { config } from '../config';

@injectable()
export class MongoConnectionService {
    public readonly connection: Connection;
    private connectionString: string;
    private readonly debug: IDebugger;
    constructor(connectionString: string) {
        this.connectionString = connectionString || config.MONGO_CONNECTION_STRING;
        this.connection = createConnection(this.connectionString, {
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            bufferMaxEntries: 0,
        });
        this.debug = debug('app:mongo');
        this.setupTriggers(this.connection);
        process.on('SIGINT', this.gracefulExit(this.connection))
        .on('SIGTERM', this.gracefulExit(this.connection));
    }

    public getConnection() {
        return this.connection;
    }

    private setupTriggers(connection: Connection) {
        connection.once('open', () => {
            this.debug(`mongodb connection created to ${this.connectionString}`);
        })
        .on('disconnected', () => {
            this.debug('mongo disconnected');
        })
        .on('reconnect', () => {
            this.debug('mongo reconnected');
        })
        .on('error', (error) => {
            this.debug(`Warning ${error}`);
        });
    }
    private gracefulExit(connection: Connection) {
        return () => connection.close(() => {
            this.debug(`Mongoose connection :${this.connectionString} is disconnected through app termination`);
            process.exit(0);
        });
    }
}
