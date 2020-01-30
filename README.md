<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 01: Fundamental NodeJS Concepts
</h3>

## :rocket: About the challenge

Create an application to store projects and their tasks using [Express](https://expressjs.com/pt-br/).

## Features

This app features all the latest tools and practices in back-end development!

- 💹 **NodeJS** — A web framework for NodeJS

## Getting started

1. Clone this repo using `git clone https://github.com/yagosansz/rockseat-bootcamp2020-challenge01.git`
2. Move yourself to the appropriate directory: `cd rockseat-bootcamp2020-challenge01`<br />
3. Run `yarn` to install dependencies<br />

### Getting started with the backend server

1. Run `yarn dev` to start the server
2. Test the routes by either using [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/)

### Routes

- `POST /projects`: Route gets the `id` and `title` through the Request Body and adds the project to an array of projects, following
the format:  `{ id: "1", title: "New Project", tasks: [] }`;

- `GET /projects`: Route that will list all the projects and their tasks;

- `PUT /projects/:id`: Route that will update only a project's title as long as a valid id is supplied;

- `DELETE /projects/:id`: Route that will delete a project as long as a valid id is supplied;

- `POST /projects/:id/tasks`: Route gets the `title` through the Request Body and store new tasks in the array of tasks, by selecting
a project from the projects' list as long as a valid `id` is supplied through the Route Parameters.

  ---

Made with ♥ by Yago!