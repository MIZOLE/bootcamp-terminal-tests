var countRegNumber = require('../countRegNumber');
let assert = require("assert");

describe ("countRegNumber function", function(){

    it ("should take return the total of all the reg numbers in the lis", function(){
        assert.deepEqual(countRegNumber("CJ 666 999, CJ  887 558, CY 558 998, CA 332 W889, AA 12 RT GP,CA 42665"), 6);
    })
    
    })