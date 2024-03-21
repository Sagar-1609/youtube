// require('dotenv').config()
import dotenv from "dotenv";

import connectDB from "./db/server.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`server is running at port :${port}`);
    });
  })
  .catch((err) => {
    console.log("mongoo db connection fail", err);
  });
