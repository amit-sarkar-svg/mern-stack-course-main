const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

// disk storage is used to store the file in the local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/uploads");
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, (err, name) => {
            name.toString("hex") + path.extname(file.originalname);
            cb(null,fn);
        });
    }
});
const upload = multer({ storage: storage });

// export upload variable to use in app.js
module.exports = upload;