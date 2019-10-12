const negate = a => {
  // your code here
  if (a === true) {
    return false;
  }
  if (a === false) {
    return true;
  }
};

const both = (a, b) => {
  // your code here
  if (a == true && b == true) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  // your code here
  if (a == true || b == true) {
    return true;
  } else  {
    return false;
  }
  
};

const none = (a, b) => {
  // your code here
  if (a != true && b != true) {
    return true;
  } else {
    return false;
  }

};

const one = (a, b) => {
  // your code here
  if (a == true && b != true) {
    return true;
  } else if (a != true && b == true) {
      return true;
    } else {
    return false;
  } 
};

const truthiness = a => {
  // your code here
  return Boolean(a);
};

const isEqual = (a, b) => {
  // your code here
  if (a == b) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  // your code here
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  // your code here
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

const isOdd = a => {
  // your code here
  if (a % 2 !== 0) {
    return true;
  } else {
    return false;
  }
};

const isEven = a => {
  // your code here
};

const isSquare = a => {
  // your code here
};

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = string => {
  // your code here
};

const isLowerCase = string => {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
