const socket = io("ws://localhost:5000");

socket.on("connect", () => {
  console.log("socket connected");
});

socket.on("response", () => {
  console.log("response from server");
});

const button = document.querySelector("button");

button.addEventListener("click", function () {
  socket.emit("message", { message: "click" });
});
