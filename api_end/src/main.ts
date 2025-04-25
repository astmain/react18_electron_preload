import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();


console.log(`
http://127.0.0.1:3000/
http://127.0.0.1:3000/index



`)
