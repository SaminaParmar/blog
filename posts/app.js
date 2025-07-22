const express = require("express");
const app = express();

app.use(express.json());  // <-- Important to parse JSON body

const users = [];  // <-- User array to store users

// Root route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// POST /users route
app.post("/users", (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// GET /users route
app.get("/users", (req, res) => {
  res.json(users);
});

// In-memory data
let posts = [];

//  POST /posts – Create a New Post
app.post("/posts", (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    userId,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

//  GET /posts – Retrieve All Posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

//  PUT /posts/:id – Update a Post
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});

// DELETE /posts/:id – Delete a Post
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== postId);
  res.status(204).send();
});

// Start the server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});