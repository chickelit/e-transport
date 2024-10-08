require("dotenv").config();

import express from "express";
import morgan from "morgan";

const port = +(process.env.PORT || 3333);
const app = express();

app.use(morgan("dev"));

app.get("/", (request, response) => {
  return response.status(200).send("Space top");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
