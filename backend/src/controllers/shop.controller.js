import Shop from "../models/shop.model.js";

import fs from "fs";
import { uploadMedia } from "../config/cloudinary.js";

export const createShop = async (req, res) => {
  try {
    const {
      shopName,
      phone,
      address,
      totalEmployees,
      businessType,
    } = req.body;

    let logo = "";

    // Upload logo if user provides one
    if (req.file) {
      const uploadResponse = await uploadMedia(req.file.path);

      logo = uploadResponse.secure_url;

      // Delete temporary multer file
      fs.unlinkSync(req.file.path);
    }

    const shop = await Shop.create({
      shopName,
      ownerId: req.userId,
      phone,
      address,
      totalEmployees,
      businessType,
      logo,
    });

    return res.status(201).json({
      success: true,
      message: "Shop Created Successfully",
      data: shop,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const getAllShops = async (req, res) => {
  try {
    const allShops = await Shop.find({
      ownerId: req.userId,
    });

    return res.status(200).json({
      success: true,
      count: allShops.length,
      data: allShops,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};