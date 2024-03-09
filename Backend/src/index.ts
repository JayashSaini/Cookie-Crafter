import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { app } from "./app.js";
import { connectDB } from "./db/index.js";

(async () => {
  try {
    connectDB();
    app.listen(process.env.PORT, function () {
      console.log(`🐱‍🏍 Server is listening at ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("🧠 Something went wrong while starting the application");
  }
})();
