/**
 * debounce 防抖
 * @params func 需要执行的函数
 * @params wait 等待时间
 * @params immediate 是否立即执行
*/

// 可选立即执行

function debounce (func, wait, immediate) {
  let timeOut, result;
  let debounced = function () {
    let _this = this, args = arguments
    if (timeOut) clearTimeout(timeOut)
    if (immediate) {
      let callNow = !timeOut
      timeOut = setTimeout(() => {
        timeOut = null
      }, wait);

      if (callNow) result = func.apply(_this, args)
    } else {
      timeOut = setTimeout(() => {
        func.apply(_this, args);
      }, wait);
    }
    return result
  }
  debounced.cancel = function () {
    if (timeOut) clearTimeout(timeOut)
    timeOut = null
  }
  return debounced
}
