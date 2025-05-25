import { expect, test, describe } from "vitest";
import { helloWorld } from "./index";

describe("index", () => {
  test("Works as expected", () => {
    expect(helloWorld()).toBe("Hello World");
  });

  test("Fails", () => {
    expect(helloWorld()).not.toBe("Hello World");
  });
});
