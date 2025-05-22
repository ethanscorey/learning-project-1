const express = require("express");
const app = express();
const port = 3000;

app.get("/api/ping", (req, res) => {
  res.status(200).send("pong");
});

app.get("/api/posts", (req, res) => {
  res
    .status(200)
    .send([{ title: "bar", slug: "foo", author: "ethan", excerpt: "foobar" }]);
});

module.exports = app;
