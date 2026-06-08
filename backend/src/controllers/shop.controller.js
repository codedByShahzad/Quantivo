import Shop from "../models/shop.model.js";

export const createShop = async (req, res) => {
  try {
    const {
      shopName,
      phone,
      logo,
      address,
      totalEmployees,
      businessType,
    } = req.body;


    const shop = await Shop.create({
        shopName,
        ownerId: req.userId,
        phone,
        address,
        totalEmployees,
        businessType,
        logo
    })

    return res.status(201).json({
        success: true,
        message: "Shop Created Successfully",
        data: shop
    })


  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
