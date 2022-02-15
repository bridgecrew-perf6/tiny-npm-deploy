#!/usr/bin/env node
// allows this file can be executed from the terminal without first typing `node index.js`

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3005, () => {
  console.log("Listening on 3005");
});
