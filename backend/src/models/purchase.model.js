import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },

    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },

    purchasedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    billNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    totalItems: {
      type: Number,
      default: 0,
    },

    subtotal: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },

    paidAmount: {
      type: Number,
      default: 0,
    },

    dueAmount: {
      type: Number,
      default: 0,
    },

    paymentStatus: {
      type: String,
      enum: ["Paid", "Partial", "Unpaid"],
      default: "Unpaid",
    },

    purchaseStatus: {
      type: String,
      enum: ["Received", "Pending"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Purchase = mongoose.model(
  "Purchase",
  purchaseSchema
);

export default Purchase;