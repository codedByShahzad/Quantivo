import dotenv from "dotenv";

dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {

    console.log("Database Connection Established");

    app.listen(port, () => {

      console.log(
        `Server Successfully Listening on Port: ${port}`
      );

    });

  })
  .catch((error) => {

    console.log("Error Connecting to Database.");
    console.log(error);

  });