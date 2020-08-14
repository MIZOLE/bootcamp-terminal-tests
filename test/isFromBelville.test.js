let assert = require("assert");

const isFromBellville = require('../isFromBellville');

describe("isFromBelville function", function () {

    it("should return true if is From Belville", function () {
        assert.equal(true, isFromBellville("CY"));
    })
    it("should return false if is not From Belville", function () {
        assert.equal(false, isFromBellville("CA"));
    })
})