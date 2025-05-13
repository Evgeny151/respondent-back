import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const whitelist = [
    'https://memstagram-typescript.vercel.app',
    'http://localhost:5173',
    'https://respondent-front.vercel.app',
  ]

  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        callback(null, true)
      } else {
        console.info('blocked cors for:', origin)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        callback(new Error('Not allowed by CORS'))
      }
    },
  })
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
