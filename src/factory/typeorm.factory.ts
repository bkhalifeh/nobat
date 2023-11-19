import { ConfigService } from '@nestjs/config';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { User } from 'src/user/entities/user.entity';
import { Turn } from 'src/turn/entities/turn.entity';
import { HairSalon } from 'src/hair-salon/entities/hair-salon.entity';
import { Comment } from 'src/comment/entities/comment.entity';

export default (
    configService: ConfigService,
):
    | MongoConnectionOptions
    | PostgresConnectionOptions
    | SqliteConnectionOptions
    | MysqlConnectionOptions => {
    const entities = [User, Turn, HairSalon, Comment];
    const dbType = configService.get<string>('DB_TYPE');
    if (dbType === 'sqlite') {
        return {
            type: dbType,
            database: configService.get<string>('DB_NAME'),
            synchronize: true,
            entities,
            logging: 'all',
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
            synchronize: false,
            entities,
            logging: 'all',
        };
    } else {
        throw new Error('Invalid DB_TYPE');
    }
};
