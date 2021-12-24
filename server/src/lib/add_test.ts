import { equal } from "assert";
import { add } from "./add";

describe("Add", () => {
  describe("positive", () => {
    it("should work", () => {
      equal(add(1, 2), 3);
    });
  });
});
