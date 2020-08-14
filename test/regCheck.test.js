var regCheck = require('../regCheck');
let assert = require("assert");

describe("regCheck function", function () {

    it(" should check reg from Gauteng", function () {
        assert.equal(regCheck("DV 23 3345NB GP", "GP"), true);
       
    })

    it(" should check reg from Mpumalanga", function () {
        assert.equal(regCheck('DV 235 228MP', 'MP'), true);
 
    })

    it(" should check reg from Eastern Cape", function () {
       
        assert.equal(regCheck("LK 189-012 EC", "EC"), true);

    })

    it(" should check reg from Leinsburg", function () {
        assert.equal(regCheck('CY 189-012 L', 'L'), true);
    })
})