import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const product = mongoose.model("products", productSchema);

export default product;
