var countRegNumber = require('../countRegNumber');
let assert = require("assert");

describe ("countRegNumber function", function(){

    it ("should take return the total of all the reg numbers in the lis", function(){
        assert.deepEqual(countRegNumber("GP 554, AA 12 RT GP"), 2);
    })

    it ("should take return the total of all from Cape Town", function(){
        assert.deepEqual(countRegNumber("CA 998, CA 332 W889, CA 128, CA 42665, CA El Kay 666 AMG"), 5);
    })
    
    
    })