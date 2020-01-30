const express = require('express');

const server = express();

server.use(express.json());

let projects = [
  {
    id: "1",
    title: "Groceries",
    tasks: ["Apple", "Orange Juice", "Milk"]
  },
  {
    id: "2",
    title: "Vacation",
    tasks: ["Save money"]
  }
]

// Lists all projects in the projects' list
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Add a new project to the projects' list
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  // const tasksArr = tasks.split(',').map(task => task.trim());

  const newProject = {
    id,
    title,
    tasks: []
  }

  projects.push(newProject);

  return res.json(projects);
});

// Add a task to an existing project
server.post('/projects/:id/tasks', (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  let updatedProject = {};

  // Adding a new task to the tasks' array
  projects = projects.map(project => {
    if(project.id == id) {
      project.tasks.push(title);
      updatedProject = project;
    }
    return project;
  });

  // Returns updated project
  return res.json(updatedProject);
});

// Update a project from from the projects' list
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  let updatedProject = {};

  projects = projects.map(project => {
    if(project.id == id) {
      project.title = title;
      updatedProject = project;
    }
    return project;
  });

  // Returns updated project
  return res.json(updatedProject);
});

// Remove a project from the projects' list
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  projects = projects.filter(project => project.id != id);

  return res.json(projects);
});

server.listen(3333);