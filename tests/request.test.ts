import { describe, expect, test } from "@jest/globals";
import { request } from "./utils/request";

describe("Request module", () => {
  test(`Should return status message "ok"`, async () => {
    const { body } = await request.get("/?approve=true").expect(200);

    expect(body.message).toStrictEqual("ok");
  });
});
