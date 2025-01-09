import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello world!");
});

const port = 3001;
server.listen(port, () => {
  console.log(`Servidor iniciado! Porta:${port}`);
});
