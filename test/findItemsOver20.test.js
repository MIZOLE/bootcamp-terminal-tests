const findItemsOver20 = require('../findItemsOver20');
let assert = require("assert");

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
 var list = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},



 ]
describe ("The findItemsOver20 function", function (){

    it('should find items over 20', function(){
        assert.deepEqual(list, findItemsOver20(itemList));
    });

});