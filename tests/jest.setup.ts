import { beforeAll, afterAll } from "@jest/globals";
import { App } from "../src/App";

const app = new App();

beforeAll(async () => {
  try {
    await app.listen(3333);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
});

afterAll(() => {
  app.close();
});
