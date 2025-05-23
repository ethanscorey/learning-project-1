const express = require("express");
const getPosts = require("./getPosts");
const app = express();
const port = 3000;

app.get("/api/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/api/posts", async (req, res) => {
  const posts = await getPosts("posts");
  res.status(200).json(posts);
});

module.exports = app;
