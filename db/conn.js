require("dotenv").config();
const mongoose = require("mongoose");

//const DB="mongodb+srv://ayushtiwari1180:Ayush1234554321@cluster2.2uawhwk.mongodb.net/?retryWrites=true&w=majority";

const DB =
  "mongodb+srv://harshmuralia:kowvex-qawTyb-1pekzy@cluster0.wiaz4ll.mongodb.net/success";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
