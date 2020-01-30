const express = require('express');

const server = express();

server.use(express.json());

let projects = [
  {
    id: "1",
    title: "Groceries",
    tasks: ["Apple, Orange Juice, Milk"]
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
  const { id, title, tasks } = req.body;

  const tasksArr = tasks.split(',').map(task => task.trim());

  const newProject = {
    id,
    title,
    tasks: tasksArr
  }

  projects.push(newProject);

  return res.json(projects);
});

// Update a project from from the projects' list
server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects = projects.map(project => {
    if(project.id == id) {
      project.title = title;
    }
    return project;
  });

  return res.json(projects);
})

// Remove a project from the projects' list
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  projects = projects.filter(project => project.id != id);

  return res.json(projects);
})

server.listen(3333);