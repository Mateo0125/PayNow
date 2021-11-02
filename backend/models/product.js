import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Int,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const producto = mongoose.model("producto", productoSchema);

export default producto;
