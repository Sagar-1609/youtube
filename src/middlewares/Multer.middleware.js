import multer from "multer";
// this is for test repo 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// fit branhc merhge 
// this is for mr merge 
export const upload = multer({
  storage,
});
