const socket = require("socket.io");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  app.use(express.static(__dirname));
  res.sendFile(path.join(__dirname, "/index.html"));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

let io = socket(server);

io.on("connect", (socket) => {
  socket.on("message", async ({ message }) => {
    console.log(message);
    setTimeout(() => {
      socket.emit("response", { message: "response" });
    }, 0);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
