import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import morgan from 'morgan';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    // if(!existsSync(join(__dirname, '..', 'static'))) {
    //     mkdirSync(join(__dirname, '..', 'static'));
    //     mkdirSync(join(__dirname, '..', 'static', 'upload'));
    // }
    // if(!existsSync(join(__dirname, '..', 'static', 'upload'))) {
    //     mkdirSync(join(__dirname, '..', 'static', 'upload'));
    // }

    app.enableCors();
    app.disable('x-powered-by');
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.use(morgan('dev'));
    app.use(helmet());

    const config = new DocumentBuilder()
        .setTitle('Nobat')
        .setDescription('The nobat API description')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http' }, 'Authorization')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

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
