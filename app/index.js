/**
 * Compute the cycle length of a given number througth a tail recursive function.
 * :( After reading about tail javascript, i am not sure if it is a good practice in java script, 
 * it seems that TailRecursion is not supported at javascript
 * @param {number} n - The Papers title.
 * @param {number} The cycle lenth of a given mumber.
 */
function getCycleLengthRec(n){
  function recursiveCycleLenngth(n, cicleLength){
    if (n == 1){
      return cicleLength;
    }
    else {
      if (n % 2 == 0){
        n = n/2;
      } else {
        n = 3 * n + 1;
      } 
      return recursiveCycleLenngth(n, cicleLength+1);   
    }
  };
  return recursiveCycleLenngth(n, 1);
};

/**
 * Compute the cycle length of a given number.
 * @param {number} n - The Papers title.
 * @param {number} The cycle lenth of a given mumber.
 */
function getCycleLength(n){
  var cicleLength = 1;
  while(n != 1){
    if (n % 2 == 0){
      n = n/2;
    } else {
      n = 3 * n + 1;
    } cicleLength++;
  } return cicleLength;
};

/**
 * Determine the max cycle length of the numbers between a given interval.
 * @param {number} i - Lower range of the interval.
 * @param {number} j - Uper range of the interval.
 * @return {number} Maximun cycle length found.
 */
function derermineMaxCyclesLength(i, j) { 
  try{
   validateInputs(i,j);
  }catch(err){
    return err;
  }
  var currentCycleLen, maxCycleLen = 0;
  for (var n = i; n <= j; n++){
    currentCycleLen = getCycleLength(n);
    if (currentCycleLen > maxCycleLen){
      maxCycleLen = currentCycleLen;
    }
  }return maxCycleLen;
};

/**
 * Validate that the inputs are in line with business rules.
 * @param {number} i - Lower range of the interval.
 * @param {number} j - Uper range of the interval.
 */
function validateInputs(i, j){
  if(isNaN(i) || isNaN(j)){ throw "The inputs should be numbers"};
  if(i > j) { throw "The first number should be lower than the second number"};
  if(i <= 0 || j <= 0) { throw "The numbers must be greater than zero"};
  if(j >= 1000000) { throw "The upper interval must be less than 1.000.000"};
}