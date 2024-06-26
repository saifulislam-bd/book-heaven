import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

import "dotenv/config";
import dbConnect from "./config/dbConnect.js";
import userRouter from "./routes/userRoute.js";
import bookRouter from "./routes/bookRoute.js";
import favoriteRouter from "./routes/favoriteRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// db connection
dbConnect();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", bookRouter);
app.use("/api/v1", favoriteRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", orderRouter);

//server listen
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
