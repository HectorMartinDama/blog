---
layout: "../../../layouts/BlogPostLayout.astro"
title: Autenticación en Express con JWT
date: 2021-08-07
description: Protege tus rutas en express con JSON Web Tokens JWT mediante un Middleware.
category: Express
author: Hector Martin Dama
---

Para este proyecto, debemos partir de un servidor con el framework Express. Aquí te dejo un artículo sobre cómo hacerlo: [Cómo iniciar un proyecto con TypeScript con Node.js y Express](https://blog-hectormartindama.vercel.app/blog/post-2).

## Cabecera HTTP Authorization

La cabecera HTTP "Authorization: Bearer 'token'" se utiliza en el protocolo HTTP para autenticar y autorizar solicitudes. Estos son sus componentes:

1. **Authorization:** Es una cabecera HTTP estandar que se utiliza para enviar las credenciales de autenticación al servidor.

2. **Bearer:** Es el tipo de esquema de autorización. Las grandes empresas como Amazon tiene su propio esquema para los tokens llamado `AWS Signature`.

3. **token:** Aqui se coloca el token de acceso real. Este token es emitido por el servidor de autorización despues de que el usuario ha proporcionado las crendenciales correctas y se ha validado con exito. El token de acceso normalmente tiene un periodo de validez limitado esto se podra configurar con la libreria y se utiliza para autorizar solicitudes a recursos protegidos en el servidor.

**Ejemplo de cabecera HTTP Authorization:**

```http
Authorization: Bearer <token>
```

![esquema de como funciona la cabecera authentication](/images/post-7/http-auth-sequence-diagram.png)

Para ver más informacion detalla de como funciona la Autenticación la puedes ver en la documentación de [mdn](https://developer.mozilla.org/es/docs/Web/HTTP/Authentication).

## Middleware Auth

Para este proyecto debemos de partir de un servidor con el framework express, aqui te dejo un articulo de como hacerlo [Como iniciar un proyecto con TypeScript con Node.js y Express](https://blog-hectormartindama.vercel.app/blog/post-2).

## Formas de guardar el token en el frontend

### Local storage

### Cookies

## Enviar el token desde el frotend
