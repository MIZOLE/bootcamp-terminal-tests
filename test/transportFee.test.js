var transportFee = require('../transportFee');
let assert = require("assert");


describe("transportFee function", function () {

    it("should test transport Fee", function () {
        assert.equal("R"+ 20, transportFee("morning")) 
        assert.equal("R"+ 10, transportFee("afternoon"))
        assert.equal("free", transportFee("night"))
    })
});
