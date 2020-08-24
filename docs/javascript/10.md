# 节流

- 原理

  > - 规定时间内多次触发，只触发一次(第一次)

- 适用场景

  > - 懒加载、滚动加载、加载更多或监听滚动条位置
  > - 监控浏览器 resize

- 时间戳版

```
/**
 * throttle 节流
 * @params func 执行的方法
 * @params wait 单位时间
 */
function throttle (func, wait) {
  let context, args, now
  let old = 0
  return function () {
    context = this
    args = arguments
    now = new Date().valueOf()
    if (now - old > wait) {
      func.apply(context, args)
      old = now
    }
  }
}
```

- 定时器版

```
/**
 * throttle 节流
 * @params func 执行的方法
 * @params wait 单位时间
 */

function throttle (func, wait) {
  let timeOut
  return function () {
    let _this = this, args = arguments
    if (timeOut) return
    timeOut = setTimeout(() => {
      func.apply(_this, args)
      timeOut = null
    }, wait);
  }
}
```

- 完整版

```
/**
 * throttle 节流
 * @params func 执行的方法
 * @params wait 单位时间
 * @params options.leading 第一次是否执行
 * @params options.trailing 最后一次是否执行
 */

function throttle (func, wait, options) {
  let timeOut, context, args, now
  let old = 0
  if (!options) options = {}
  return function () {
    context = this
    args = arguments
    now = new Date().valueOf()
    if (options.leading === false && !old) {
      old = now
    }
    if (now - old > wait) {
      if (timeOut) {
        clearTimeout(timeOut)
        timeOut = null
      }
      func.apply(context, args)
      old = now
    } else if (!timeOut && options.trailing !== false) {
      timeOut = setTimeout(() => {
        timeOut = null
        old = new Date().valueOf()
        func.apply(context, args)
      }, wait);
    }
  }
}
```
