import express from "express";
import cors from "cors";

const app = express();

import "dotenv/config";

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
