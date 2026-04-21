const testCase = [121, 100, -121, 10, 1001]

var isPalindrome = function(x) {
  let ans = 0;
  if (x < 0) return false;
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  while (x > ans) {
    let rem = x % 10;
    ans = 10 * ans + Math.abs(rem);
    x = Math.floor(x / 10);
    console.log({
      ans,
      rem,
      x
    })
  }
  return x == ans || (x == Math.floor(ans / 10));
};


testCase.forEach((item) => {
  console.log(isPalindrome(item))
})
