var totalPhoneBill = require('../totalPhoneBill');
let assert = require("assert");

describe("totalPhoneBill function", function () {

    it(" should test total Phone Bill", function () {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R" + 7.45);
    })
})