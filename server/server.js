import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

import "dotenv/config";
import dbConnect from "./config/dbConnect.js";
import router from "./routes/userRoute.js";

// db connection
dbConnect();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1/user", router);

//server listen
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
