var fromWhere = require('../fromWhere.js');
let assert = require("assert");


describe("fromWhere function", function () {

    it(" should state from where", function () {
        assert.equal(fromWhere("CA 558, CA  558"), "Cape Town");
        assert.equal(fromWhere("CY 888, CY 669"), "Bellville");
        assert.equal(fromWhere("CJ 987"), "Paarl");
        assert.equal(fromWhere("GP 887"), "Some other place!");

    })
})