import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormFactory from './factory/typeorm.factory';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            useFactory: typeormFactory,
            inject: [ConfigService]
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
