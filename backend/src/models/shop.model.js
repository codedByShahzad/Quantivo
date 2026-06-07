import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
      trim: true,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    logo: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    totalEmployees: {
      type: Number,
      default: 0,
    },

    businessType: {
      type: String,
      trim: true,
    },

    subscriptionPlan: {
      type: String,
      default: "Free",
    },

    subscriptionStatus: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
