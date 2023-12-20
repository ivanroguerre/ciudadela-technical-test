import express from "express";

const app = express();

app.get("/", (_, res) => res.send("hola"));

app.listen(3001);
