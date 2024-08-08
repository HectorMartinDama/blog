---
layout: "../../../layouts/BlogPostLayout.astro"
title: A Trello Clon Backend and Infraestructure
date: 2024-03-12
author: Hector Martin Dama
image: { src: "/images/post-1/main.png", alt: "code" }
description: Creating the Trello backend applying best practices such as Hexagonal Architecture, DDD (Domain-Driven Design) and Event-Driven Architecture.
draft: false
category: Project
---

This is a project based on the challenges page [devChallenges](https://legacy.devchallenges.io/challenges/wP0LbGgEeKhpFHUpPpDh) applying best practices such as Hexagonal Architecture, DDD (Domain-Driven Design) and Event-Drive Architecture with the Express and TypeScript framework.

## Basic Infrastructure

To facilitate the development of this application we are going to use the `typescript-ddd-skeleton` template from CodelyTV. To be able to use it here you have to go to this [repository](https://github.com/CodelyTV/typescript-ddd-example) and click on the `Use this template` button, this will create a repository with the template.

![basic infrastructure](/images/post-1/BasicInfrastructure.svg)

## Auth Infrastructure

![auth infrastructure](/images/post-1/AuthThullo.svg)

## Notification Microservice Infrastructure

![notification microservice infrastructure](/images/post-1/NotificationMicroserviceInfrastructure.svg)

### Case of use

## Activity User Registration Microservice Infrastructure

Records in a SQLite database all changes/actions performed on a dashboard by a specific user.

Records the following actions:

| Action                             | Event name                |
| ---------------------------------- | ------------------------- |
| Create the board                   | board.created             |
| Change the background              | board.changedBackground   |
| Add member in a board              | board.addedMember         |
| Change the visibility of the board | board.changedVisibility   |
| Delete board                       | board.deleted             |
| Create list                        | list.created              |
| Delete list                        | list.deleted              |
| Create task                        | task.created              |
| Add cover in a task                | task.addedCover           |
| Add label in a task                | task.addedLabel           |
| Add attachment in a task           | task.addedAttachment      |
| Move task in another list          | task.task.updatedPosition |

## Deployment to production
