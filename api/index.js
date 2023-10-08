const express = require("express"); //for middleware
const dotenv = require("dotenv"); //for storing the secret keys
const mongoose = require("mongoose"); //for mongoose connection

/*
for string images we can also use AWS,FIREBASE
*/
const multer = require("multer"); // for storing the images
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const app = express();

// cors thing
// const cors = require('cors');
// app.use(cors({ origin: 'http://localhost:3000' }));

dotenv.config();
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology : true,
//     useCreateIndex : true,
// })
// .then(console.log("connected to mongoDB"))
// .catch((err)=>{console.log(err)})

app.listen(process.env.PORT || 5000, (err) => {
  if (!err) {
    console.log("Blog master server is running, please Login");
  } else {
    console.log("Error occured, server can't start" + err);
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// user Authentication
app.use("/api/auth", authRoute);

// user Edits
app.use("/api/users", userRoute);

// posts route
app.use("/api/posts", postRoute);

// Categories route
app.use("/api/category", categoryRoute);
