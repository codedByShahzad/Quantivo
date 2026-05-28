import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}));

app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoutes);

export default app;