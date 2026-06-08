import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"
import shopRoutes from "./routes/shop.route.js"

import { isAuthenticated } from "./middlewares/isAuthenticated.js";

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
app.use("/api/v1/user", isAuthenticated, userRoutes);
app.use("/api/v1/shop", shopRoutes);

export default app;