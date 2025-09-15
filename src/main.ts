import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from "public" folder
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Set views directory
  app.setBaseViewsDir(join(__dirname, '..', 'src/views/pages'));

  // Set Handlebars as view engine
  app.setViewEngine('hbs');

  // You can define partials in a separate folder by telling hbs where they are:
  app.engine('hbs', require('hbs').__express); // Nest will now understand .hbs files

  // Start server
  await app.listen(3000);
  console.log(`🚀 Blog running at http://localhost:3000`);
}
bootstrap();
