import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormFactory from './factory/typeorm.factory';
import {
    CacheModule,
    CacheModuleAsyncOptions,
    CacheStore,
} from '@nestjs/cache-manager';
import redisFactory from './factory/redis.factory';
import { ThrottlerModule } from '@nestjs/throttler';
import { UserModule } from './user/user.module';
import { UtilModule } from './util/util.module';
import { AuthModule } from './auth/auth.module';
import throttleFactory from './factory/throttle.factory';
@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        UtilModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: typeormFactory,
            inject: [ConfigService],
        }),
        CacheModule.registerAsync({
            imports: [ConfigModule],
            useFactory: redisFactory,
            inject: [ConfigService],
        }),
        ThrottlerModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: throttleFactory,
            inject: [ConfigService],
        }),

        UserModule,

        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
