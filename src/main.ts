import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    app.enableCors();
    app.disable('x-powered-by');

    await app.listen(
        configService.get<number>('APP_PORT'),
        configService.get<string>('APP_HOST'),
        () => {
            console.log(
                `Start on ${configService.get<number>(
                    'APP_PORT',
                )}:${configService.get<string>('APP_HOST')}`,
            );
        },
    );
}
bootstrap();
