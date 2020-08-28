Function.prototype._apply = function (context) {
  let ctx = context || window

  ctx.func = this

  if (typeof ctx.func !== 'function') {
    throw Error('必须是函数调用apply')
  }

  let res = arguments[1] ? ctx.func(...arguments[1]) : ctx.func()
  delete ctx.func
  return res
}