import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function dbConnection() {
  try {
    if (config.DB_URI) {
      await mongoose.connect(config.DB_URI as string);
      app.listen(config.port, () => {
        console.log(`server is listening on port: ${config.port as string}`);
      });
    } else {
      console.log("db uri is not defined");
    }
  } catch (err) {
    console.log(`Failed to connect database ${err}`);
  }
}

dbConnection();
