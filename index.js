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

// Global middleware
let nRequests = 0;
server.use((req, res, next) => {
  console.time('Request Time');
  nRequests++;
  console.log(`Request: ${nRequests}; Method: ${req.method}; URL: ${req.url}`)

  next();
  console.timeEnd('Request Time');
});

// Local middleware
function checkValidId(req, res, next) {
  const { id } = req.params;

  const foundIndex = projects.findIndex(project => project.id == id);

  if(!projects[foundIndex]) {
    return res.status(400).json({ error: 'Requested ID does not exists.' });
  }

  return next();
}

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
server.post('/projects/:id/tasks', checkValidId, (req, res) => {
  const { title } = req.body;
  const { id } = req.params;

  const foundIndex = projects.findIndex(project => project.id == id);
  projects[foundIndex].tasks.push(task);

  return res.json(projects);
});

// Update a project from from the projects' list
server.put('/projects/:id', checkValidId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const foundIndex = projects.findIndex(project => project.id == id);
  projects[foundIndex].title = title;

  return res.json(projects);
});

// Remove a project from the projects' list
server.delete('/projects/:id', checkValidId, (req, res) => {
  const { id } = req.params;

  projects = projects.filter(project => project.id != id);

  return res.json(projects);
});

server.listen(3333);