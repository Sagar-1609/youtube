// require('dotenv').config()
import dotenv from "dotenv";

import connectDB from "./db/server.js";

dotenv.config({
  path: "./env",
});

connectDB();
