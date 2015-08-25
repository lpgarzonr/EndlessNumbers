QUnit.test( "hello test", function( assert ) {
assert.ok( 1 == "1", "Passed!" );
});


var a = getCycleLengthRec(22);
console.log('get cycle a: ', a);
var b = getCycleLength(22);
console.log('get cycle b: ', b);
var c = derermineMaxCyclesLength(10, 1);
console.log('get cycle c: ', c);
var c = derermineMaxCyclesLength(-100,200);
console.log('get cycle c: ', c);
var c = derermineMaxCyclesLength(1,20100000);
console.log('get cycle c: ', c);
var c = derermineMaxCyclesLength(900,'a');
console.log('get cycle c: ', c);
