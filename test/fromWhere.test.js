var fromWhere = require('../fromWhere.js');
let assert = require("assert");


describe("fromWhere function", function () {

    it(" should state from Cape Town", function () {
        assert.equal(fromWhere("CA 558, CA  558"), "Cape Town");

    })

    it(" should state from Bellville", function () {
        assert.equal(fromWhere("CY 888, CY 669"), "Bellville");
    })

    it(" should state from Paarl", function () {
        assert.equal(fromWhere("CJ 987"), "Paarl");
    })

    it(" should state from some other places", function () {
        assert.equal(fromWhere("GP 887"), "Some other place!");
      })
})