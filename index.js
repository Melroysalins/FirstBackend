import express, { json } from "express";
import dotenv from "dotenv";
const app = express();

const PORT = 3000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/app", (req, res) => {
  res.json.send({ message: "This is app router" });
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login </h1>");
});

app.listen(PORT, () => {
  console.log("Server is runing", process.env.PORT);
});
