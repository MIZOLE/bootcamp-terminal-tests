var regCheck = require('../regCheck');
let assert = require("assert");

describe("regCheck function", function () {

    it(" should check reg", function () {
        assert.equal(regCheck("DV 23 3345NB GP", "GP"), true);
        assert.equal(regCheck('DV 235 228MP', 'MP'), true);
        assert.equal(regCheck("LK 189-012 EC", "EC"), true)
        assert.equal(regCheck('CY 189-012 L', 'L'), true)

    })
})