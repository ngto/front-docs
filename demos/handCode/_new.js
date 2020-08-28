function _new (ctx, ...args) {
  let newObj = Object.create(ctx.prototype)
  let res = ctx.apply(newObj, args)
  return res instanceof Object ? res : newObj
}
function _new1 (ctx, ...args) {
  let obj = {}
  obj.__proto__ = ctx.prototype
  let res = ctx.call(obj, args)
  return res
}