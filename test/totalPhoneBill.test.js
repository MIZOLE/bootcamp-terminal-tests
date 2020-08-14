var totalPhoneBill = require('../totalPhoneBill');
let assert = require("assert");

describe("totalPhoneBill function", function () {

    it(" should test total of sms's sent", function () {
        assert.equal(totalPhoneBill("sms, sms, sms, sms, sms"), "R" + 3.25);
    })

        it(" should test the total of calls used", function () {
            assert.equal(totalPhoneBill("call, call, call, call, call"), "R" + 13.75);
        })
})