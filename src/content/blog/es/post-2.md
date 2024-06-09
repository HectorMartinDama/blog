---
layout: "../../../layouts/BlogPostLayout.astro"
title: Como iniciar un proyecto en TypeScript con Node.js y Express
date: 2024-05-31
description: Infraestructura básica para iniciar un proyecto de Express con TypeScript.
image: { src: "/images/post-2/cover.webp", alt: "A picture of infraestructure" }
category: Express
author: Hector Martin Dama
---

**Express** es uno de los frameworks más famosos para el desarrollo backend con Node.js, y en este artículo te voy a enseñar cómo iniciar un proyecto con esta tecnología.

## 1. Creamos la carpeta inicial y el package.json.

Creamamos la carpeta donde estará el proyecto e inicializamos el proyecto.

```shell
mkdir auth-middleware # crea la carpeta
cd auth-middleware # entramos dentro de la carpeta
npm init -y o pnpm init # inicializamos el proyecto
```

Si al inicializar el proyecto nos sale el error "command not found", para solucionarlo debemos instalar [Node.js](https://nodejs.org/en/download/package-manager) y [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) o [pnpm](https://pnpm.io/installation).

Después de ejecutar estos comandos, deberás tener en la carpeta un archivo `package.json` con el siguiente contenido.

```json
{
  "name": "your file name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", // El punto de entrada de nuestra app se debe cambiar por .ts
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 2. Instalar Typescript y otras dependencias

En este proyecto vamos a utilizar las siguientes depedencias:

- [express](https://www.npmjs.com/package/express): Servidor web
- [cors](https://www.npmjs.com/package/cors): Permite la Compartición de Recursos de origen cruzado
- [dotenv](https://www.npmjs.com/package/dotenv): Gestor de variables de entorno
- [nodemon](https://www.npmjs.com/package/nodemon): Permite actualizar el servidor de forma automatica cuando se aplica un cambio en el codigo.

```shell
npm install express cors dotenv nodemon
```

Como vamos a usar TypeScript, debemos instalar los tipos de datos correspondientes.

```shell
npm install -D typescript ts-node-dev @types/express @types/cors
```

## 3. Generar tsconfig.json

```shell
npx tsc --init
```

Una vez ejecutado ese comando, debemos abrir el archivo `tsconfig.json` y modificar la opción `outDir` para especificar el directorio donde se realizará la compilación de nuestra aplicación.

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

## 4. Crear un servidor en Express

Crea un archivo con el nombre `index.ts` y ábrelo. Este será el punto de inicio de nuestra aplicación. En este archivo, crearemos un endpoint llamado `/health`. Este endpoint se utiliza para comprobar que el servidor está funcionando correctamente. Es decir, si la respuesta del servidor es 200, significa que el servidor está funcionando.

```typescript
import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";

dotenv.config(); // para poder utlizar las variables de entorno

const app: Application = express();
const PORT = process.env.port || 8000;

app.get("/health", (req: Request, res: Response) => {
  res.send("Welcome to the server").status(200);
});

app.listen(PORT, () => {
  console.log(`this server is running at http://localhost:${PORT}`);
});

export default app;
```

## 5. Agregamos los scripts en el package.json

Agregamos los comandos para poder iniciar el proyecto y realizar el build. En este caso, utilizaremos el comando `dev`, que utilizará la librería nodemon para actualizar el servidor de forma automática cada vez que guardemos un cambio, y `build` para compilar nuestra aplicación más adelante.

```json
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon index.ts" // actualiza el servidor cuando hay cambios
  }
}
```

## 6. Corremos el codigo

```shell
npm run dev
```

## 7. Comprobamos la respuesta del servidor

Para comprobar que el servidor responde, podemos hacerlo de dos formas:

1. Desde el navegador, ingresando a [http://localhost:8000/health](http://localhost:8000/health).

![browser request](/images/post-7/browserRequest.webp)

2. Haciendo una solicitud de tipo GET en Postman.

![postman request](/images/post-7/postmanGetRequest.webp)

## 8. Testing de los endpoints con Vitest y SuperTest

La utilización de pruebas es cada vez más importante, ya que aseguran que la API funcione como se espera, incluso después de realizar cambios o actualizaciones.

### Instalar Vitest y Supertest

Estas dos librerías nos ayudarán a realizar pruebas a los endpoints de nuestra API.

```shell
npm install -D vitest supertest @types/supertest
```

### Configurar script que ejecuta los test

Para ello, debemos ir al archivo `package.json` y cambiar el valor de **test**.

```json
"scripts": {
    "test": "vitest",
  }
```

### Configurar Vitest para Node.js

En la carpeta raíz, debemos crear un archivo llamado `vite.config.ts` con este contenido.

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node", // Usar 'node' para pruebas de servidor
  },
});
```

### Creando nuestro primer test

Crearemos una carpeta llamada `tests` y dentro de ella crearemos un archivo llamado `index.test.ts`. En este archivo, escribiremos un test que compruebe que la respuesta del endpoint `/health` es 200.

```typescript
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../index";

describe("API endpoint", () => {
  it("should server ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
  });
});
```

### Ejecutamos el test

```shell
npm run test
```

![test response ok](/images/post-2/okResponseTest.webp)

Para verificar la fiabilidad del test, debemos hacer que falle para evitar falsos positivos. Para lograrlo, podemos cambiar el código de estado en el archivo `index.test.ts` de 200 a otro valor, por ejemplo, 500.

```typescript
describe("API endpoint", () => {
  it("should server ok", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(500);
  });
});
```

Ejecutamos nuevamente el test y confirmamos que efectivamente el test falla. Nos indica que se esperaba un código de estado 500 pero ha recibido un 200. Por lo tanto, podemos concluir que nuestro test es fiable.

![test response error](/images/post-2/errorResponseTest.webp)

## 9. Deploy en producción con CI y CD.

### Subir el codigo a un repo de github

Antes de subir el proyecto, debemos crear un archivo `.gitignore`, que se utiliza para evitar que ciertos archivos o directorios se suban al repositorio al ejecutar `git add`.

```shell
.env
dist/
node_modules
```

Para subir el proyecto a GitHub, primero debemos crear un nuevo repositorio en GitHub y luego seguir las instrucciones proporcionadas para agregar nuestro repositorio local al repositorio remoto en GitHub.

```shell
echo "# Api-TypeScript-Express-CD" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:HectorMartinDama/Api-TypeScript-Express-CD.git
git push -u origin main
```

Después, debes ejecutar estos comandos:

```shell
git add .
git commit -m 'first commit'
git push origin main
```

### Render

Necesitamos crear una cuenta en [Render](https://render.com/). Una vez que tengamos la cuenta, hacemos clic en el botón "New", luego en "Web Service", y finalmente seleccionamos "Build and deploy from a Git repository". Seleccionamos el repositorio que creamos en el paso anterior.

En la configuración del despliegue, en el apartado **Build Command**, ponemos el siguiente comando: `npm install && npm run build`. En el apartado **Start Command**, ponemos: `npm run start`. Finalmente, hacemos clic en **Create Web Service**. Si todo ha ido bien, el proyecto estará disponible en Internet.

![deploy is live](/images/post-2/deployIsLive.webp)

> Ahora, cada vez que hagas un commit o una PR en tu repositorio, el proyecto se desplegará automáticamente con los nuevos cambios.

### Github Actions

Con esta acción de GitHub, creamos un flujo de trabajo para que se ejecute cada vez que hagamos un commit en el repositorio. Este flujo de trabajo primero ejecuta las pruebas de nuestra API y, si estas pasan, realiza el despliegue en Render.

[Documentación Oficial de Render](https://docs.render.com/deploy-hooks)

Aquí tenéis el [repositorio](https://github.com/HectorMartinDama/Api-TypeScript-Express-CD) de GitHub.
