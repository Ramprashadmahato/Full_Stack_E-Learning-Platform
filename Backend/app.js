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

// Initialize App
const app = express();

// Create HTTP Server
const server = http.createServer(app);

// ======================================
// Allowed Frontend Origins
// ======================================
const allowedOrigins = [
  "http://localhost:5173",
  "https://full-stack-e-learning-platform-opal.vercel.app",
];

// ======================================
// Middleware
// ======================================
app.use(express.json());

// ======================================
// CORS Setup
// ======================================
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS Not Allowed"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ======================================
// Socket.IO Setup
// ======================================
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

// ======================================
// Database Connection
// ======================================
connectDB();

// ======================================
// Root Route
// ======================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "E-Learning Platform Backend Running Successfully",
  });
});

// ======================================
// Pass Socket.IO to Routes
// ======================================
app.use((req, res, next) => {
  req.io = io;
  next();
});

// ======================================
// API Routes
// ======================================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/opportunities", opportunityRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/notifications", notificationRoutes);

// ======================================
// Static Files
// ======================================
app.use(
  "/uploads",
  express.static(path.join(__dirname, "Public/uploads"))
);

// ======================================
// Socket Connection
// ======================================
io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});

// ======================================
// Error Handling Middleware
// ======================================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// ======================================
// Start Server
// ======================================
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
