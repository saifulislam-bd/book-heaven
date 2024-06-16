import express from "express";
import cors from "cors";

const app = express();

import "dotenv/config";
import dbConnect from "./config/dbConnect.js";

// db connection
dbConnect();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//server listen
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
