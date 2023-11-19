import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import morgan from 'morgan';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    const configService = app.get(ConfigService);

    app.enableCors();
    app.disable('x-powered-by');
    app.useGlobalPipes(new ValidationPipe());
    app.use(morgan('dev'));
    app.use(helmet());

    const config = new DocumentBuilder()
        .setTitle('Nobat')
        .setDescription('The nobat API description')
        .setVersion('1.0')
        // .addTag('cats')
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
