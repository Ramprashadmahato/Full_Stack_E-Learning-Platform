require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

// Database
const connectDB = require("./src/Db/config");

// Routes
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const opportunityRoutes = require("./src/routes/opportunityRoutes");
const submissionRoutes = require("./src/routes/submissionRoutes");
const notificationRoutes = require("./src/routes/notificationRoutes");

// Initialize app
const app = express();

// Create HTTP server
const server = http.createServer(app);

// ======================
// Socket.IO Setup
// ======================
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://full-stack-e-learning-platform-opal.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

// ======================
// Middleware
// ======================
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// ======================
// Database Connection
// ======================
connectDB();

// ======================
// Root Route (IMPORTANT)
// ======================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "E-Learning Platform Backend Running Successfully",
  });
});

// ======================
// Pass io to Routes
// ======================
app.use((req, res, next) => {
  req.io = io;
  next();
});

// ======================
// API Routes
// ======================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/notifications", notificationRoutes);

// ======================
// Static Folder
// ======================
app.use("/uploads", express.static(path.join(__dirname, "Public/uploads")));

// ======================
// Socket Connection
// ======================
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

// ======================
// Error Middleware
// ======================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ======================
// Server Start
// ======================
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});