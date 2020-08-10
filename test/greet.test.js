let functionToTest = require('../greet.js');

let assert = require("assert");

describe('The greet function', function(){

    it('should greet Lulama correctly', function(){
        assert.equal('Hello, Lulama', greet('Lulama'));
    });
});