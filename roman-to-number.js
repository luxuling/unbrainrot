const romans = ["I", "IV", "III", "LVIII", "MCMXCIV", "MCDLXXVI"]
// 'I', 'V', 'X', 'L', 'C', 'D', 'M'
var romanToInt = function(s) {
  const romanMap = new Map([
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1],
  ]);

  const combinationRomanMap = new Map([
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4],
  ])

  let first = 0
  let second = 1

  let baseRoman = s.slice(0)

  let combinationSum = 0
  let baseSum = 0

  while (s.length > 1 && first < s.length - 1 && second < s.length) {
    const firstValue = s[first]
    const secondValue = s[second]

    if (combinationRomanMap.has(`${firstValue}${secondValue}`)) {
      baseRoman = baseRoman.replace(`${firstValue}${secondValue}`, '')
      combinationSum += combinationRomanMap.get(`${firstValue}${secondValue}`)
    }

    first++
    second++
  }

  for (let index = 0; index < baseRoman.length; index++) {
    const element = baseRoman[index];
    baseSum += romanMap.get(element)
  }
  return baseSum + combinationSum
}

romans.forEach((item) => {
  console.log({
    result: romanToInt(item)
  })
})
