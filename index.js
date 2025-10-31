require("dotenv").config();
const express = require("express");
// import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
const BASE_DIR =
  "/Users/carlosperez/workspace/TOP-projects/repos/basic-informational-site";

app.get("/", (req, res) => {
  res.sendFile(BASE_DIR + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(BASE_DIR + "/about.html");
});
app.get("/contact-me", (req, res) => {
  res.sendFile(BASE_DIR + "/contact-me.html");
});
app.use((req, res) => {
  res.sendFile(BASE_DIR + "/404.html");
});

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`App running at port ${PORT}`);
});
