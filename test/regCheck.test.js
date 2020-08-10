var functionToTest = require('../regCheck');
let assert = require("assert");

describe("regCheck function", function () {

    it(" should check reg", function () {
        assert.equal(regCheck(plate, loc));
    })
})