import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  const url = process.env.MONGODB_URL
  try {
    const conn = await mongoose.connect(url);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
