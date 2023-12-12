/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str==="" || str===" "){
    return true;
  }
  str = str.replace(/[!.'";,:`?\s]/g, '').toLowerCase();
  console.log(str);
  let newStr=[];
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
  if (newStr === str) {
    return true;
  }else{
    return false;
  }
}

module.exports = isPalindrome;
