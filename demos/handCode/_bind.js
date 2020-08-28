Function.prototype._bind = function (context) {
  let ctx = JSON.parse(JSON.stringify(context)) || window
  ctx.func = this
  const args = Array.from(arguments).slice(1)

  return function () {
    let allArgs = args.concat(Array.from(arguments))
    return allArgs.length > 0 ? ctx.func(...allArgs) : ctx.func()
  }
}