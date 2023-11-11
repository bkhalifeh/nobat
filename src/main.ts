import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    app.enableCors();
    app.disable('x-powered-by');
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(
        configService.get<number>('APP_PORT'),
        configService.get<string>('APP_HOST'),
        () => {
            console.log(
                `Start on ${configService.get<number>(
                    'APP_HOST',
                )}:${configService.get<string>('APP_PORT')}`,
            );
        },
    );
}
bootstrap();
