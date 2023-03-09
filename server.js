const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./src/config/db");
const cors = require("cors");
 const routes=require("./src/routes")
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(routes)

dotenv.config({ path: "./src/config/config.env" });
dbConnect();
app.listen(PORT, () => {
  console.log(`Server is runing on  http://localhost:${PORT}`);
});