require("dotenv").config();

import express from "express";
import morgan from "morgan";

const port = +(process.env.PORT || 3333);
const app = express();

app.use(morgan("dev"));

app.get("/v1", (request, response) => {
  if (request.query.approve) {
    return response.status(200).json({
      message: "ok",
    });
  }

  return response.status(500).json({
    message: "error",
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
