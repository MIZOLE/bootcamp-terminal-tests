var isWeekday = require('../isWeekday');

let assert = require("assert");


describe("isWeekday function", function () {

    it(" should test is week day", function () {
        assert.equal(isWeekday("Monday") , true);
        assert.equal(isWeekday("Sunday") ,false);

    })
})