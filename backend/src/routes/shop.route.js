import express from "express";

import { createShopValidation } from "../validations/shop.validation.js";
import { validate } from "../middlewares/validate.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createShop } from "../controllers/shop.controller.js";

const router = express.Router();

router.post("/createshop", isAuthenticated, createShopValidation, validate, createShop);

export default router;
