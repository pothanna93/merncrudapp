const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DATABASE;
//"mongodb+srv://pothanna:pullolla@cluster1.qkghi9i.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((error) => console.log(error.message));
