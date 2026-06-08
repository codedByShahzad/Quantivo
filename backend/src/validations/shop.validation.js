import { body } from "express-validator";

export const createShopValidation = [

body("shopName")
    .trim()
    .notEmpty()
    .withMessage("Shop Name is required")
    .isLength({ min: 3 })
    .withMessage("Shop Name must be at least 3 characters"),

body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required"),

body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required"),

body("businessType")
    .trim()
    .notEmpty()
    .withMessage("Business Type is required"),

body("totalEmployees")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Employees must be greater than 0"),

body("logo")
    .optional()
    .isURL()
    .withMessage("Shops Icon Must be a Valid String")

];