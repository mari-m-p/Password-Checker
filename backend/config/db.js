const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  const mongo = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${mongo.connection.host}`);
};

module.exports = connectDB;
