var isWeekday = require('../isWeekday');

let assert = require("assert");


describe("isWeekday function", function () {

    it(" should rturn true if it's weekday", function () {
        assert.equal(isWeekday("Monday"), true);

    })

    it(" should rturn false if it's not weekday", function () {
        assert.equal(isWeekday("Sunday"), false);

    })
})