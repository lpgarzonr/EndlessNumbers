QUnit.module("Inputs validation tests");

QUnit.test( "The inputs should be numbers", function( assert ) {

	//act
	var result = derermineMaxCyclesLength('a', 10);

	//assert
	assert.equal( result, "The inputs should be numbers" );
});

QUnit.test( "The first number should be lower than the second number", function( assert ) {

	//act
	var result = derermineMaxCyclesLength(100, 10);

	//assert
	assert.ok( result === "The first number should be lower than the second number" );
});

QUnit.test( "The numbers must be greater than zero", function( assert ) {
  assert.throws(
    function() {
      validateInputs(0, 1)
    },
    "The numbers must be greater than zero"
  );
});

QUnit.test( "The upper interval must be less than 1.000.000", function( assert ) {
  assert.throws(
    function() {
      validateInputs(1, 10000001)
    },function( err ) {
      return err.toString() === "The upper interval must be less than 1.000.000";
    }
  );
});

QUnit.module("getCycleLength tests");
QUnit.test( "the getCycleLength function should calculate the correct number cycle length", function( assert ) {
	//arrange
	var number = 22;

	//act
	var result = getCycleLength(number);

	//assert
	assert.equal(result, 16);
});

QUnit.test( "the getCycleLength function should calculate the correct number cycle length", function( assert ) {
	//arrange
	var number = 888;

	//act
	var result = getCycleLength(number);

	//assert
	assert.ok(result === 73);
});

QUnit.module("getCycleLength tests");
QUnit.test( "The getCycleLength function should calculate the correct number cycle length", function( assert ) {
	//arrange
	var number = 22;

	//act
	var result = getCycleLength(number);

	//assert
	assert.equal(result, 16);
});

QUnit.test( "The determineMaxCyclesLength function should calculate the maximun cycle length found between the numbers of a given interval", function( assert ) {
	//arrange
	var lowerInterval = 1;
	var upperInterval = 22;

	//act
	var result = derermineMaxCyclesLength(lowerInterval, upperInterval);

	//assert
	assert.equal(result, 21);
});
//Q1: Should this test have the same name that the last one?
QUnit.test( "The determineMaxCyclesLength function should calculate the maximun cycle length found between the numbers of a given interval", function( assert ) {
	//arrange
	var lowerInterval = 1;
	var upperInterval = 3;
	var cycleLengths = [getCycleLength(1), getCycleLength(2), getCycleLength(3)];
	var maxCycleLengths = Math.max.apply(Math, cycleLengths); 

	//act
	var result = derermineMaxCyclesLength(lowerInterval, upperInterval);

	//assert
	assert.ok(result === maxCycleLengths);
});