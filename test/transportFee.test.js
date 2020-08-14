var transportFee = require('../transportFee');
let assert = require("assert");


describe("transportFee function", function () {

    it("should test transport the Fee morning shift", function () {
        assert.equal("R" + 20, transportFee("morning"))
    })

    it("should test transport Fee the afternoon shift", function () {
        assert.equal("R" + 10, transportFee("afternoon"))
    })

    it("should test transport Fee for the night shift", function () {
        assert.equal("free", transportFee("night"))
    })
});
