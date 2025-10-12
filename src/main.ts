/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = [
    'http://localhost:5173',
    'https://respondent-front.vercel.app',
    'https://176.57.208.20',
    'http://176.57.208.20',
  ];

  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      if (!origin || whitelist.some((allowed) => origin.startsWith(allowed))) {
        callback(null, true);
      } else {
        console.info('blocked cors for:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
  });

  // Добавим обработку preflight
  app.use((req, res, next) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (req.method === 'OPTIONS') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      res.sendStatus(204);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      next();
    }
  });

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
