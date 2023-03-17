const env = require("dotenv");
const express = require("express");
const app = express();
require("./Db/connection");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
env.config();
const PORT = process.env.DATABASE || 4000;

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`server is started at port no ${PORT}`));
