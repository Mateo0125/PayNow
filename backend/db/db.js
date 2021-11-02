// importar librerias

import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with mongoDb has been successful");
  } catch (error) {
    console.log("Error to connect to MongoDB: \n" + error);
  }
};

export default { dbConnection };
