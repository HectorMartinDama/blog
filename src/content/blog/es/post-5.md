---
layout: "../../../layouts/BlogPostLayout.astro"
title: Flujos de trabajo y estrategias de ramas en Git
date: 2024-09-03
description: Los flujos de trabajo y las estrategias más usadas en el mundo del desarollo
category: Git
image:
  { src: "/images/post-5/cover.webp", alt: "A picture of Responsively App" }
author: Hector Martin Dama
---

## GitFlow

GitFlow es una de las estrategias más conocidas para trabajar en equipo. Se expuso en el artículo titulado ["A successful Git branching model"](https://nvie.com/posts/a-successful-git-branching-model/) de **Vincent Driessen**.

### Ramas principales

Al iniciar el repositorio, se deben de crear dos ramas principales.

- **main**: Su función es guardar el código que se encuentra en producción.
- **develop**: Código de pre-producción con nuevas funcionalidades que aun deben de ser testeadas y validadas, pero que seran implementadas en el siguiente despliegue a producción.

Después de que la rama **develop** esté preparada y sea estable, sus modificaciones se incluirán en la rama **main** para generar una nueva versión de producción.

Finalmente, en Git Flow **es importante comprender que cada commit realizado a la rama principal main representa una versión de producción**.

![Esquema de la estrategia de GitFlow](/images/post-5/EsquemaGitFlow.svg)

### Ramas de apoyo

Aparte de las ramas **main** y **develop**, también hay ramas de soporte. Existen tres categorías de ramas de apoyo que, a diferencia de las principales, son temporales y se eliminarán al fusionarse. Cada rama posee una labor específica:

- **Feature**: Cuando estás desarrollando una nueva función para el proyecto.

- **Release**: Al preparar el lanzamiento de una versión nueva.

- **HotFix**: Para cambios imprevistos como arreglar un bug o problema en producción.

#### Ramas Feature

Trabajar en características nuevas es lo habitual en cualquier proyecto para mejorarlo y hacerlo más completo en cada iteración. Para eso existen las ramas _feature_ estas ramas se originan de la rama **develop**, se fusionan de nuevo en develop y se eliminan una vez completadas.

![Esquema de funcionamiento de la rama de apoyo feature en la estrategia GitFlow](/images/post-5/EsquemaFeatureGitFlow.svg)

**Resumen**:

- Se crea a partir de la rama develop
- Se fusiona en develop
- La convención del nombre (feature-\*)

#### Ramas Release

Las ramas **release** sirven para preparar un nuevo lanzamiento de nuestro código a producción. Para ello, una vez que la rama develop ha sido validada y tiene los cambios que queremos lanzar, creamos a partir de ella una rama **release**. Se fusionan de nuevo en develop y main. Después se elimina la rama.

**Resumen**:

- Se crea a partir de la rama develop
- Se fusiona en develop y main
- La convención del nombre (release-\*)

#### Ramas HotFix

Las ramas **hotfix** son ramas temporales utilizadas para abordar cambios no planificados. Después de ser validados y aprobados, se añaden a la rama principal para generar una nueva versión de producción.

**Resumen**:

- Se crea a partir de la rama main
- Se fusiona en develop o main
- La convención del nombre (hotfix-[version])

## GitHubFlow

Es una alternativa más simple a GitFlow, creada por **GitHub**, pensada especialmente para equipos que hacen despliegues de forma regular. Se basa en la creación de **Pull Requests** que serán discutidas por el equipo para que se integren a la rama principal.

**¿Qué es una Pull Request?**

> Una Pull Request o PR es una petición de cambios que se envía a través de una rama de GitHub.

### Ramas principales

GitHub Flow tiene 2 tipos de ramas principales:

- **main**: La rama principal que contiene los cambios que se desplegan regularmente.

- **otra rama**: Cualquier otra rama que se integre con la principal es decir **main**.

### Ejemplo de uso

```bash
# Creamos una rama desde main
git switch -c feature-dark-mode main

# Agregamos todos los commits que queramos a la rama
git commit -am "Add dark mode"

# Sincronizamos la rama con el repositorio remoto.
git push origin feature-dark-mode
```

Ahora prodemos acceder a GitHub y crear una Pull Request para integrar los cambios con la rama principal. Si todo va bien, nos debería salir un mensaje como este cuando entremos al repositorio. Pulsaremos en **Compare & Pull Request**.

![GitHubFLowExamplePRMessage](/images/post-5/GitHubFlowExamplePR.png)

![GitHubFLowExamplePRMessage](/images/post-5/GitHubFlowExamplePR2.png)

Más abajo saldrán los cambios que se van a realizar si la PR es aceptada.

![AllChangesPR](/images/post-5/ChangesPR.png)

Una vez que le hayamos dado a **Create Pull Request**, le saldra esta pantalla al creador o creadores del repositorio, en este caso nosotros mismos.

![Options PR](/images/post-5/OptionsPR.png)

Tendremos varias opciones:

- **Merge pull request**: Integrar los cambios en la rama principal
- **Close pull request / Close with comment**: Rechazar la PR
- **Comment**: Escribir un comentario

## Ship / Show / Ask

Fue presentada por [Rousan Wilsenach en el blog de Martin Fowler](https://martinfowler.com/articles/ship-show-ask.html).Es una estrategia de ramas que combina la idea de las Pull Request junto a un despliegue continuo.

Los cambios que hagamos en el repositorio se dividen en 3 categorias:

- **Ship:** Se fusionan en la rama principal sin revision.
- **Show:** Abre una PR para que los cambios se han revisados por la CI pero se fusiona inmediatamente.
- **Ask:** Abre una PR para discutir los cambios antes de fusionarlos.

### Ship

Ship significa que realizaremos un cambio **directamente en la rama principal**, es decir, lo enviaremos **directamente a producción**. Debemos asegurarnos de que dicho cambio haya superado los tests internos.

- **Descripción:** Se refiere a decisiones o cambios que un equipo puede ejecutar directamente, sin necesidad de consulta o aprobación.

- **Ejemplo:** Correción de errores menores, ajustes de estilo en una interfaz de usuario, mejoras de rendimiento interno, añadir test.

- **Propósito:** Fomentar la autonomía y la rapidez de ejecución, ya que estas decisiones no requieren un proceso de aprobación formal.

![Ship Esquema](/images/post-5/ShipEsquema.svg)

### Show

En Show utilizamos **Pull Request**, pero **no dependemos de recibir feedback del equipo**. Simplemente esperamos que los tests del sistema de integración continua (CI) se completen con éxito.

- **Descripción:** Los cambios se muestran o comunican después de que se hayan aplicados, ya que no necesitan aprobación previa.

- **Ejemplo:** Añadir nuevas funcionalidades, siguendo estructuras ya acordadas.

- **Propósito:** Mantener la transparencia y asegurarse de que los interesados estén al tanto de lo que está ocurriendo, pero sin ralentizar el proceso.

![Esquema Show](/images/post-5/ShowEsquema.svg)

### Ask

Es similar a Show, pero en este caso sí **esperamos al feedback** de nuestro equipo antes de realizar la fusión de la rama.

- **Descripción:** Esta categoría se utiliza para decisiones de alto impacto o riesgo, donde es necesario pedir permiso o consultar a los interesados o al equipo de liderazgo antes de tomar cualquier acción. Estas decisiones suelen ser complejas o tener consecuencias importantes.
- **Ejemplo:** Cambios que afectan la visión del producto, la dirección estratégica o decisiones financieras importantes.
- **Propósito:** Asegurar que las decisiones críticas se tomen con el consenso adecuado y que se consideren todas las implicaciones.

![Esquema Ask](/images/post-5/AskEsquema.svg)

### Resumen

- **Ship:** Actuar sin consultar. Baja complejidad y riesgo.
- **Show:** Actuar, pero informar después. Riesgo moderado.
- **Ask:** Consultar antes de actuar. Riesgo alto.
