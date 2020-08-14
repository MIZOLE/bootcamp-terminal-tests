let assert = require("assert");


const countAllPaarl = require('../countAllPaarl.js');

describe ("countallpaarl function", function(){

it ("should return how many from from paarl", function(){
    assert.equal(2, countAllPaarl("CJ 125, CJ 554"));
})

it ("should return false if they are not from paarl", function(){
    assert.equal(0, countAllPaarl("CA 999, CY 887"));
})



})