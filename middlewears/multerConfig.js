const multer = require("multer");
const path = require("path");

const multerConfig = multer.diskStorage({
  destination: path.join(__dirname, "../", "tmp"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: multerConfig });

module.exports = upload;