import mongoose from "mongoose";
import { DB_name } from "../constant.js";

const connectDB = async () => {
  try {
    const connectiontag = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_name}`
    );
    console.log(
      `/n mongodb conection !! DB host :${connectiontag.connection.host}`
    );
  } catch (error) {
    console.log(" mongo db server error", error);

    throw error;
    process.exit(1);
  }
};
export default connectDB;
