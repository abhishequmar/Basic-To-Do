const express = require("express");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Initial todo items
const todos = [
  { id: 1, task: "Do laundry", completed: false },
  { id: 2, task: "Buy groceries", completed: true },
  { id: 3, task: "Read a book", completed: false },
];

// Retrieve all todo items
app.get("/todos", (req, res) => {
  res.status(200).send(todos);
});

// Retrieve a specific todo item by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const todo = todos.find((item) => item.id === id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).send("ID not found");
    }
  } catch (error) {
    res.status(404).send("Error retrieving todo");
    console.log(error);
  }
});

// Create a new todo item
app.post("/todos", (req, res) => {
  const { task, completed = false } = req.body;
  const newId = todos.length ? todos[todos.length - 1].id + 1 : 1; // Auto-increment ID
  const newTodo = { id: newId, task, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
  console.log(newTodo);
});

// Update a specific todo item by ID
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((item) => item.id === id);

  if (index !== -1) {
    const updatedData = req.body;
    todos[index] = { ...todos[index], ...updatedData };
    res.status(200).json(todos[index]);
  } else {
    res.status(404).send("Task not found");
  }
});

// Delete a specific todo item by ID
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).send("ID not found");
  } else {
    todos.splice(index, 1); // Remove the item from the array
    res.status(200).send("Deletion successful");
  }
});

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Test route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(5000, () => {
  console.log("App running on port 5000");
});
