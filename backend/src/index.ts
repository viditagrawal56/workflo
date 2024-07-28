import express from "express";
import connectDB from "./utils/connectDB";
import authRoutes from "./routes/auth";
import dotenv from "dotenv";
import cors from "cors";
import protectedRoutes from "./routes/protectedRoutes";

dotenv.config();

const app = express();

connectDB();

const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
