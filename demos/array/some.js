let arr = [1, 2, 3, 4, 5, 6]
let result = arr.some((currentValue, index, arr) => {
  return currentValue > 3
})
console.log(result)