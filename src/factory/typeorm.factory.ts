import { ConfigService } from '@nestjs/config';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

export default (
    configService: ConfigService,
):
    | MongoConnectionOptions
    | PostgresConnectionOptions
    | SqliteConnectionOptions
    | MysqlConnectionOptions => {
    const entities = [];
    const dbType = configService.get<string>('DB_TYPE');
    if (dbType === 'sqlite') {
        return {
            type: dbType,
            database: configService.get<string>('DB_NAME'),
            synchronize: true,
            entities,
        };
    } else if (
        dbType === 'mysql' ||
        dbType === 'postgres' ||
        dbType === 'mongodb'
    ) {
        return {
            type: dbType,
            database: configService.get<string>('DB_NAME'),
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USER'),
            password: configService.get<string>('DB_PASS'),
            synchronize: true,
            entities,
        };
    } else {
        throw new Error('Invalid DB_TYPE');
    }
};
