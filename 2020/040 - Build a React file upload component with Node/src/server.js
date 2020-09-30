const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
app.use(cors());

var upload = multer({ dest: "../public/uploads/" });
app.post("/upload", upload.single("file"), async (req, res) => {
  try {    
    if (req.file) {
      res.send({
        status: true,
        message: "File Uploaded!",
      });
    } else {
      res.status(400).send({
        status: false,
        data: "File Not Found :(",
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => console.log("Server Running..."));
