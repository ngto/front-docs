// function deepClone (obj) {
//   if (obj == null) return null;
//   if (typeof obj !== 'object') return obj
//   if (obj instanceof Array) return obj == "[]" ? new Array(...obj) : new Array().concat()
//   if (obj instanceof RegExp) return new RegExp(obj)
//   if (obj instanceof Date) return new Date(obj)
//   if (obj instanceof Map) return new Map(obj)
//   if (obj instanceof Set) return new Set(obj)

//   let newObj = Object.create(obj)
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepClone(obj[key])
//     }
//   }
//   return newObj
// }

// 获取对象类型
function getType (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)

}
function deepClone (obj) {
  let type = getType(obj)
  // 传入对象null 或者不是对象类型 直接返回自身
  if (obj === null || typeof obj !== 'object') return obj
  if (type === 'Array') return obj == "[]" ? new Array(...obj) : new Array().concat()
  if (type === 'RegExp') return new RegExp(obj)
  if (type === 'Date') return new Date(obj)
  if (type === 'Map') return new Map(obj)
  if (type === 'Set') return new Set(obj)
  if (type === 'Function') return new Function(obj)

  let newObj = Object.create(obj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
