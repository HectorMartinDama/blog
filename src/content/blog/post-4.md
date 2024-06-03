---
layout: "../../layouts/BlogPostLayout.astro"
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

## 3. Promise.any

¿Alguna vez has querido esperar una lista de promesas y que, al resolverse correctamente una cualquiera, continuar con la ejecución de tu código? Pues para eso se incorpora **Promise.any()**.

```javascript
const promises = [
  fetch("/from-external-api"),
  fetch("/from-memory"),
  fetch("/from-new-api"),
];

try {
  // espera a la primera respuesta correcta que termine
  const first = await Promise.any(promises);
  // La más rápida fue la de memoria
  console.log(first); // respuesta desde 'from-memory'
} catch (error) {
  // ¡Todas las promesas han fallado!
  console.assert(error instanceof AggregateError);
  // Log the rejection values:
  console.log(error.errors);
  // → [
  //     <TypeError: Failed to fetch /from-external-api>,
  //     <TypeError: Failed to fetch /from-memory>,
  //     <TypeError: Failed to fetch /from-new-api>
  //   ]
}
```

### AggregateError

Como has podido ver en el ejemplo anterior, ahora cuando la promesa falla, se devuelve una instancia de `AggregateError`. Este error es una instancia de `Error` y tiene una propiedad llamada `errors` que contiene una lista de errores para cada promesa que falló.

### La diferencia con `Promise.race`...

`Promise.race` y `Promise.any` son muy similares. La diferencia es que `Promise.race` se resuelve cuando cualquier promesa ha sido _resuelta_ o _rechazada_. En cambio `Promise.any` ignora las promesas que son rechazadas y sólo se resuelve cuando se resuelve la primera... o se rechaza cuando todas las promesas se han rechazado.

### La tabla de diferencias de `Promise`

Para que lo veas más claro, he preparado una pequeña tabla para diferenciar los diferentes métodos de Promise a la hora de trabajar con un array de promesas, para que eligas la que más encaje con tu caso de uso.

```
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−+−−−−−−−−−−−−−−−-−+
| Método             | Descripción                                      | Añadida en...   |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−+−−−−−−−−−−−−−−−−-+
| Promise.allSettled | Espera a todas las promesas se resuelvan o no    | ES2020          |
| Promise.all        | Se para cuando una promesa es rechazada          | ES2015          |
| Promise.race       | Se para cuando una promesa es rechaza o resuelta | ES2015          |
| Promise.any        | Se para cuando una promesa es resuelta           | ES2021          |
+−−−−−−−−−−−−−−−−−−−−+−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−-−−−+−−−−−−−−−−−−−−−-−+
```

## 4. replaceAll

Hasta ahora, reemplazar todas las _instancias_ de una cadena de texto en una cadena de texto te obligaba a usar `Regex` ya que `replace`, si le pasabas un _string_, lo que hacía era sólo reemplazar la primera instancia encontrada.

```javascript
// ¡Quiero cambiar las manzanas por bananas!
"🍏🍏🍋🍋🍊🍊".replace("🍏", "🍌");
// Pero qué...
// -> '🍌🍏🍋🍋🍊🍊'

// ¡Tienes que usar Regex para conseguirlo!
"🍏🍏🍋🍋🍊🍊".replace(/🍏/g, "🍌");

// ¡Hasta ahora! ¡Hola replaceAll!
"🍏🍏🍋🍋🍊🍊".replaceAll("🍏", "🍌");
```

`replaceAll` queda mucho más legible en nuestro código y hace justo lo que esperaba: cambiar todas las _instancias_ de una cadena de texto en una cadena de texto.

## 5. WeakRef

`WeakRef` te permite crear una referencia débil a un objeto para no prevenir que se destruya por el _Garbage Collector_ de JavaScript. ¿Por qué? Pues por qué cuando creamos un objeto, especialmente si son grandes, estos no son automáticamente destruidos por el _Garbage Collector_ si existe una referencia a ellos.

Con el método `deref` de `WeakRef`, podemos acceder a la referencia del objeto. Si la referencia al objeto ha sido eliminada, se devuelve `undefined`.

```javascript
// Al crear un objeto...
let coords = { x: 13, y: 72 };
// Mientras tengas acceso a él directamente,
// el objeto no será liberado de memoria
// por el Garbage Collector

// Ahora podemos crear una referencia débil al objeto
const weakCoords = new WeakRef(coords);

// Recuperamos las propiedades del elemento
const ref = weakCoords.deref();
if (ref) {
  console.log("Todavía tenemos acceso a las coordenadas");
  ref.x; // -> 13
} else {
  // ref es `undefined`
  console.log("La referencia ha sido eliminada");
}
```

> Una cosa que debes tener en cuenta con `WeakRef` es que... seguramente **es mejor si no lo usas**. Esta funcionalidad está pensado para casos muy específicos que, en general, acabarán en librerías y frameworks. **Está bien que conozcas su existencia pero los casos de uso son muy limitados.** La recolección de basura en JavaScript puede variar mucho dependiendo del navegador, entorno y especificaciones del sistema.
