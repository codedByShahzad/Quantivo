import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    billingCycle: {
      type: String,
      enum: ["Monthly", "Yearly"],
      default: "Monthly",
    },

    maxProducts: {
      type: Number,
      default: 0,
    },

    maxUsers: {
      type: Number,
      default: 1,
    },

    reportsAccess: {
      type: Boolean,
      default: false,
    },

    analyticsAccess: {
      type: Boolean,
      default: false,
    },

    inventoryManagement: {
      type: Boolean,
      default: false,
    },

    billingAndInvoicing: {
      type: Boolean,
      default: false,
    },

    lowStockAlerts: {
      type: Boolean,
      default: false,
    },

    prioritySupport: {
      type: Boolean,
      default: false,
    },

    dataBackup: {
      type: Boolean,
      default: false,
    },

    emailSupport: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const Plan = mongoose.model("Plan", planSchema);

export default Plan;