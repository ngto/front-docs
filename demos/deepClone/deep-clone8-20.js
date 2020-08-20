function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
function deepClone (obj) {
  let type = getType(obj)
  if (obj === null || typeof obj !== 'object') return obj;
  if (type === 'Array') return new Array(obj)

  let nowObj = new obj.constructor
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      nowObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
