const countAllFromTown = require('../countAllFromTown');
let assert = require("assert");

describe("allfromCapeTown function", function () {

    it("should find hown many from Bellville", function () {

        assert.equal(2, countAllFromTown("CY 123, CJ 123, CA 325, CY 565, CJ 654, CA 887, CY 778", "CJ"));
    })

    it("should find hown many from Cape Town", function () {

        assert.equal(3, countAllFromTown("CY 123, CY 123, CA 325, CY 565, CA 654, CA 887, CY 778", "CA"));
    })

    it("should find hown many from Paarl", function () {
        assert.equal(3, countAllFromTown("CY 123, CJ 123, CA 325, CY 565, CJ 654, CA 887, CY 778", "CY"));
    })

}) 