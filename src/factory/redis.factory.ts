import { CacheStore } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

export default async (config: ConfigService) => {
    const store = await redisStore({
        socket: {
            host: config.get<string>('REDIS_HOST'),
            port: config.get<number>('REDIS_PORT'),
        },
        password: config.get('REDIS_PASS'),
    });

    return {
        store: store as unknown as CacheStore,
        ttl: 60 * 60 * 24 * 7,
    };
};
