const express= require("express");
const app = express();
const mongoose= require("mongoose");
const controller= require("./controllers/stucontroller");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/school").then(()=>{console.log("connection successfull")});

const storage = multer.diskStorage({
  destination:(req, file, cd)=>{
    cd(null, "public/images")
  },
  filename:(req, file, cd)=>{
    cd(null, file.filename+"_"+Date.now()+path.extname(file.originalname))
  }
})

const upload= multer({storage:storage});

app.post("/insert",controller.insertdata)

app.get("/display",controller.datadisplay)

app.get("/delete/:id",controller.datadelete)

app.post("/search",controller.datasearch)

app.get("/edit/:id", controller.dataedit)

app.post("/editandupdate/:id", controller.editandupdate)

app.post("/uploadimg", upload.single("file"),(req, res)=>{
  console.log(req.file);
})

app.listen(5000,()=>{
  console.log("server run on 5000 port");
})