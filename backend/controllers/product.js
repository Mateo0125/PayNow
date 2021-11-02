import producto from "../models/product.js";

const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.price)
    return req.status(400).send("Falta informacion del nombre o el precio");

  const existingProduct = await product.findOne({ name: req.body.name });
  if (existingProduct) return res.status(400).send("El producto ya existe");

  const productSchema = new product({
    name: req.body.name,
    price: req.body.price,
    dbStatus: true,
  });

  const result = await productSchema.save();
  if (!result) return res.status(400).send("Fallo al registar el producto");

  return res.status(200).send({ result });
};

export default { registerProduct}
