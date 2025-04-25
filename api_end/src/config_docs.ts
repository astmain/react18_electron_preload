import {ValidationPipe} from '@nestjs/common';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {knife4jSetup} from 'nest-knife4j';

export function config_docs(app: any) {
    const PORT = 3000;
    const NAME = 'nest-swagger-demo';
    const VERSION = '1.0.0';

    app.useGlobalPipes(new ValidationPipe());
    const config = new DocumentBuilder()
        .setTitle(NAME)
        .setDescription(`${NAME}-${VERSION} API description`)
        .setVersion(VERSION)
        .addServer(`http://localhost:${PORT}/`, 'Local environment')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/swagger', app, document);
    knife4jSetup(app, [
        {
            name: NAME,
            url: `/api/swagger-json`,
            swaggerVersion: VERSION,
            location: `/api/swagger-json`,
        },
    ]);
    let main = {app, PORT, NAME, VERSION};
    return main;
}