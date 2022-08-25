const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

dotenv.config();
connectDB();
const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://chatify-mern-app.web.app/"
  );
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

app.use("/api/chats", chatRoutes);

app.use("/api/message", messageRoutes);

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve("frontend", "build", "index.html"));
//   });
// } else {

// }

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`Server Started ${PORT}`));

const io = require("socket.io")(server, {
  pingTimeOut: 60000,
  cors: { origin: "https://chatify-mern-app.web.app/" },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined : ", room);
    socket.emit("connected");
  });

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat user not defined");

    chat.users.forEach((user) => {
      if (user._id === newMessageRecieved.sender._id) {
        return;
      } else {
        socket.in(user._id).emit("message recieved", newMessageRecieved);
      }
    });
  });

  socket.on("typing", (room) => {
    socket.in(room).emit("typing");
  });

  socket.on("stop typing", (room) => {
    socket.in(room).emit("stop typing");
  });

  socket.off("setup", () => {
    console.log("User Disconnected");
    socket.leave(userData._id);
  });
});
