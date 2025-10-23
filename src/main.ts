import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for frontend
  app.enableCors({
  origin: ['https://next-blog-rust-alpha.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
});
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Backend listening on ${port}`);
}
bootstrap();
