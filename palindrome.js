// palindrome


function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  console.log(isPalindrome("race a car"));
  console.log(isPalindrome("madam"));
