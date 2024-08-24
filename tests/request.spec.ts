import { afterAll, beforeAll, describe, expect, test } from "@jest/globals";
import { request } from "./utils/request";
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

describe("Request module", () => {
  test(`Should return status message "ok"`, async () => {
    const { body } = await request.get("/?approve=true").expect(200);

    expect(body.message).toStrictEqual("ok");
  }, 30000);
});
