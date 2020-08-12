var yearsAgo = require('../yearsAgo');
let assert = require("assert");

// var date = new Date()

describe("yearsAgo function", function () {

    it("should return the years Ago", function () {
        assert.equal(15, yearsAgo(2005))
    })

});
