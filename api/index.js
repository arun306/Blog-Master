const express = require("express"); //for middleware
const dotenv = require("dotenv"); //for storing the secret keys
const mongoose = require("mongoose"); //for mongoose connection
const multer = require("multer"); // for storing the images
/*
    for string images we can also use AWS,FIREBASE
*/
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const app = express();
app.use(express.json());
dotenv.config();

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology : true,
//     useCreateIndex : true,
// })
// .then(console.log("connected to mongoDB"))
// .catch((err)=>{console.log(err)})

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => {
    console.log(err);
  });

// app.use("/xyz",(req,res)=>{
//     console.log(req)
//     console.log("----------------------------------------------------------------------------------------------------")
//     console.log(res)
//     console.log("hey this is the xyz url")
//     res.send("Hello World!");
// })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
    // cb(null, "xyz.jpeg");
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);

app.listen("5000", () => {
  console.log("server is listening on http://localhost:5000/");
});
