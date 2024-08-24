import dotenv from "dotenv";

dotenv.config();

import express from "express";
import morgan from "morgan";
import http from "http";

export class App {
  private readonly server: http.Server;

  /**
   *
   */
  constructor() {
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

    this.server = http.createServer(app);
  }

  async listen(port: number = 3333) {
    return new Promise((resolve, reject) => {
      try {
        this.server.listen(port, () => {
          console.log(`App running on port ${port}`);

          resolve("Server started");
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async close() {
    this.server.close();
  }
}
