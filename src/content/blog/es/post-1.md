---
layout: "../../../layouts/BlogPostLayout.astro"
title: A Trello Clon Backend and Infraestructure
date: 2024-03-12
author: Hector Martin Dama
cover: { src: "public/images/post-1.png" }
image: { src: "public/images/post-1.png", alt: "code" }
description: Creando el backend de Trello aplicando las mejores prácticas como Arquitectura Hexagonal, DDD (Domain-Driven Design) y Event-Driven Architecture.
draft: false
category: Project
---

Este es un proyecto basado en la pagina de retos [devChallenges](https://legacy.devchallenges.io/challenges/wP0LbGgEeKhpFHUpPpDh) aplicando las mejores practicas como Aquitectura Hexagonal, DDD (Domain-Driven Design) y Event-Drive Architecture con el framework Express y TypeScript.

## Primeros pasos

Si todos estos conceptos te suena a chino no te preocupes a continuación te dejare algunos recursos que te pueden ayudar.

### Infraestructura

Para facilitar el desarollo de esta aplicación vamos a utilizar la plantilla de `typescript-ddd-skeleton` de CodelyTV. Para poder utilizarla aqui que ir a este [repositorio](https://github.com/CodelyTV/typescript-ddd-example) y dar al boton `Use this template` esto te creara un repositorio con la plantilla.

### Probar en local

Para poder continuar debemos de probar que funcione la plantilla correctamente para ello debemos de abrir nuestro repositorio con nuestro editor de confianza en este caso utilizare VSCode.

#### Traer el repositorio en local

Abre tu terminal y ejecuta estos comandos. Para que funcione tienes que tener instalado git.

```sh
# 1. Clonar el repositorio
git clone <UrlDeTuRepositorio> thulloBackend # Puedes encontrar la URL en la página del repositorio de GitHub, en el botón verde "Code".

# 2. Navegar al directorio del repositorio clonado
cd thulloBackend

# 3. Traer los cambios del reposiotorio remoto
git pull origin main

# 4. Abrir la carpeta con tu editor de confianza
```

#### Instalar Docker en tu maquina

Si ya tienes intalado docker en tu maquina te puedes pasar este paso. Si no, debes instalar la aplicación de docker desktop en esta [pagina](https://www.docker.com/products/docker-desktop/).

Hay que asegurarse que docker desktop esta corriendo correctamente para ello en la aplicación debe salir el indicador verde como en la imagen de a continuación.

![comprobar que docker desktop esta corriendo](/images/post-1/dockerDesktopCheck.webp)

#### Levantar contenedor de docker

Una vez que tenemos el repositorio en local debemos instalar las dependencias y levantar el contenedor de docker tener en marcha todos los servicios en local. Deberas ejecutar estos comandos en tu terminal.

> Recuerda de que debemos estar en la ruta del proyecto para que los comandos funcionen.

```sh
# 1. Levantar el docker compose
docker-compose up --build
```

Para comprobar que los servicios se han levantado correctamente debemos ir a la aplicación de docker desktop y veremos lo siguiente.

![allServicesRun](/images/post-1/dockerAllServicesRun.webp)

#### Configurar RabbitMQ

Debemos de ir a esta dirección `http://localhost:15672/` nos llevara a a la instancia de rabbitMQ, nos pedira un username y una password en este caso las claves por defecto son `guest` en ambos campos.

Una vez que estemos dentro debemos de crear una `Exchange` que servira para poder enrutar nuestros mensajes que son eventos dominio a las colas correspondientes. Para este ejemplo vamos a crear una cola llamada `mooc.increment_courses_counter_on_course_created`.

##### 1. Creamos el Exchange para poder enrutar los mensajes

Dentro de RabbitMQ debemos ir al apartado de Exchanges y crear una nueva llamada `domain_events` despues dar al boton de `Add exchange`.

![createExchange](/images/post-1/createExchange.webp)

##### 2. Creamos la cola de mensajes

Dentro de RabbitMQ debemos ir al apartado de Queues y crear una nueva llamada `mooc.increment_courses_counter_on_course_created` despues dar al boton de `Add queue`.

![createQueue](/images/post-1/createQueue.webp)

##### 3. Asignamos el Exchange a la cola

Vamos al apartado de Exchange seleccionamos la exchange `domain_events`. En el apartado **To queue** agregamos el nombre de la cola creada anteriormente `mooc.increment_courses_counter_on_course_created` y en el subapartado **Routing key** ponemos el nombre del evento de dominio en este caso es `course.created`.

![bindQueue](/images/post-1/bindQueue.webp)

#### Iniciar proyecto en local

Ahora si podremos ejecutar nuestro proyecto en local.

```sh
# 1. Instalar las depenedencias
npm install

# 2. Iniciar la aplicación
npm run dev:mooc:backend
```

Listo!!!. Nuestro proyecto estara ready en el puerto `http://localhost:5000` u otro si este esta ocupado.

> Recuerda que cada vez que queramos poner la aplicación en funcionamiento el contenedor de docker debe de estar levantado.

#### Chekeamos que nuestra API funciona correctamente

Por ultimo debemos de comprobar que nuestra API funciona de forma correcta.

#### 1. Comprobar que este conectada con rabbitMQ

Para comprobarlo debemos ir a rabbitMQ y en el apartado **Connections** debemos de tener una conexion activa en color verde.

#### 2. Comprobar que el endpoint status responde (200 OK)

Normalmente todas las Apis o servicios tienen un endpoint para comprobar que el servicio este levantado en este caso tenemos un endpoint llamado `status`. Para hacer una petición a este endpoint lo podemos hacer mediante la aplicación [**Postman**](https://www.postman.com/downloads/) o cualquier otro cliente para hacer peticiones http.

![statusCheck](/images/post-1/statusCheck.webp)

### Tecnologias utilizadas

Las tecnologias utilizadas son las siguientes Express con TypeScript, Jest, Cucumber

## Despliegue a producción

## Resultado Final

Puedes echar un vistazo al proyecto desplegado

**Si nos sale este error** al ejecutar el comando es porque no hemos creado la cola en rabbitMq.

![errorAlIniciarProyecto](/images/post-1/errorLaunchProject.svg)
