import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import dashboardRoutes from "./routes/dashboard.routes";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware to parse JSON body
app.use(express.json());

// mount routes
app.use("/api/auth", authRoutes);

app.use("/api", dashboardRoutes);

// start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
