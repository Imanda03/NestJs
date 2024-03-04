import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8800
  await app.listen(port)
  .then(() => {
    console.log(`App is listing to:: localhost: ${port}/`)

  })
  .catch((error:any) => {
    console.error(error)
  })
}

bootstrap();
