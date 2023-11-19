import { ConfigService } from '@nestjs/config';

export default (configService: ConfigService) => {
    return {
        secret: configService.get<string>('SECRET_JWT'),
        signOptions: { expiresIn: '7d' },
    };
};
