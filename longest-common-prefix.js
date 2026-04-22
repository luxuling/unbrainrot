const prefixes = ["flower", "flow", "flight"]
const prefixes2 = ["dog", "racecar", "car"]
const prefixes3 = ["ab", "a"]
const prefixes4 = ["flower", "flower", "flower", "flower"]

var longestCommonPrefix = function(strs) {
  let prefix = strs[0]
  for (let index = 1; index < strs.length; index++) {
    const word = strs[index];

    while (word.indexOf(prefix) != 0) {
      prefix = prefix.slice(0, prefix.length - 1)
      if (prefix === '') return ''
    }
  }
  return prefix
};

console.log(longestCommonPrefix(prefixes4))
