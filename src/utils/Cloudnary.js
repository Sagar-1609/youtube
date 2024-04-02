import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUDNAME,
  api_key: process.env.CLOUDNARY_APIKEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload on cloudinary
    await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded
    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    //remove the localysaved temporary operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
