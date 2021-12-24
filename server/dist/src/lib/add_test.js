"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var add_1 = require("./add");
describe("Add", function () {
    describe("positive", function () {
        it("should work", function () {
            assert_1.equal(add_1.add(1, 2), 3);
        });
    });
});
