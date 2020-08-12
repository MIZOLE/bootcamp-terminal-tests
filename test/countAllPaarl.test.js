let assert = require("assert");


const countAllPaarl = require('../countAllPaarl.js');

describe ("countallpaarl function", function(){

it ("should return true if they are from paarl", function(){
    assert.equal(2, countAllPaarl("CJ 125, CJ 554"));
})

// it ("should nreturn false if they are not from paarl", function(){
//     assert.equal(false, countAllPaarl());
// })



})