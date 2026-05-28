import jwt from "jsonwebtoken";
import ms from "ms";

const generateToken = (res, user) => {
  const token = jwt.sign(
    { id: user._id }, // ✅ FIXED
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost only
      sameSite: "lax",
      maxAge: ms("7d"),
    })
    .json({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
};

export default generateToken;