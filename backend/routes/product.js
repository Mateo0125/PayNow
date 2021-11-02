import express from "express";
import product from "../controllers/product.js";

const router = express.Router();

router.post("/registerProduct", product.registerProduct);

export default router
