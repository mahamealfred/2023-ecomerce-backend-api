const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./src/config/config.env" });

const connectionString = process.env.MONGOOSE_URI;
const dbConnect = async () => {
  const connect = await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`mongodb connected on: ${connect.connection.host}`);
};
module.exports = dbConnect