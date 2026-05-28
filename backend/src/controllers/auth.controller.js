import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const signUp = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // Create User
    const user = await User.create({
      name,
      email,
      password,
    });

    // Success Response
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Failed to Register",
      error: error.message
    });

  }

};

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Validate Fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Provide the required fields",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    // Check User
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // Compare Password
    const matchPassword = await user.comparePassword(password);

    // Check Password
    if (!matchPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    // Generate Token
    return generateToken(res, user);

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Failed to Login",
    });

  }

};