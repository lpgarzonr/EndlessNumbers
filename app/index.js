function getCycleLengthRec(n){
  function recursiveCycleLenngth(n, count){
    if (n == 1){
      return count;
    }
    else {
      if (n % 2 == 0){
        n = n/2;
      } else {
        n = 3 * n + 1;
      } 
      return recursiveCycleLenngth(n, count+1);   
    }
  };
  return recursiveCycleLenngth(n, 1);
};

function getCycleLength(n){
  var count = 1;
  while(n != 1){
    if (n % 2 == 0){
      n = n/2;
    } else {
      n = 3 * n + 1;
    } count++;
  } return count;
};

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

function validateInputs(i, j){
  if(isNaN(i) || isNaN(j)){ throw "The inputs should be numbers"};
  if(i > j) { throw "The first number should be lower than the second number"};
  if(i < 0 || j < 0) { throw "The numbers must be greater than zero"};
  if(j >= 1000000) { throw "The upper interval must be less than 1.000.000"};
}