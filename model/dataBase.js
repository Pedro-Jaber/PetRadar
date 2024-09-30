const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Databse connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
