function isPalindrome(word) {
  // Write your algorithm here
  let wordToCheck  = word.toLowerCase()
  let toCompare = wordToCheck.split('').reverse().join('')
  let Bool; 
  if(wordToCheck === toCompare){
    Bool = true;
  } else {
    Bool = false
  }
  return Bool

}

/* 
  Add your pseudocode here
  Reverse string input
  if the reversed string is same as the input
    return true
  else
  return false
*/

/*
  Add written explanation of your solution here
  write a Palidrone solution of true and false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;