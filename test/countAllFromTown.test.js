const countAllFromTown = require('../countAllFromTown');
let assert = require("assert");

describe ("allfromCapeTown function", function(){

    it ("should find all from that Town", function(){

        assert.equal(2, countAllFromTown("CY 123, CJ 123, CA 325, CY 565, CJ 654, CA 887, CY 778", "CJ"));
    })
}) 