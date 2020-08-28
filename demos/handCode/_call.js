Function.prototype._call = function (context) {
  let ctx = context || window
  ctx.func = this
  if (typeof ctx.func !== 'function') {
    throw new Error('必须是函数调用')
  }
  //参数转换为数组并去掉数组中的第一项
  let args = Array.from(arguments).slice(1)
  let res = arguments.length > 1 ? ctx.func(...args) : ctx.func()
  delete ctx.func
  return res
}