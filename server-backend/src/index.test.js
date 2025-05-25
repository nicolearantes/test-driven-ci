import { expect, test, describe } from "vitest";
import { helloWorld } from "./index.js";

describe("index", () => {
  test("Works as expected", () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
