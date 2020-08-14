var yearsAgo = require('../yearsAgo');
let assert = require("assert");

// var date = new Date()

describe("yearsAgo function", function () {

    it("should return the years Ago since 2005", function () {
        assert.equal(15, yearsAgo(2005))
    })

    it("should return the years Ago since i was born in 1998", function () {
        assert.equal(22, yearsAgo(1998))
    })

});
