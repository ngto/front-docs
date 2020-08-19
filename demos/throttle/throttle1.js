// function throttle (func, wait) {
//   let old = 0
//   return function () {
//     let context = this, args = arguments, now = Date.now();
//     if (now - old > wait) {
//       old = now
//       func.apply(context, args);
//     }
//   }
// }

// function throttle (func, wait) {
//   let timeOut;
//   return function () {
//     let context = this, args = arguments
//     if (!timeOut) {
//       timeOut = setTimeout(() => {
//         timeOut = null
//         func.apply(context, args);
//       }, wait);
//     }
//   }
// }

function throttle (func, wait, options) {
  let timeout, old = 0, now, context, args;
  return function () {
    context = this;
    args = arguments;
    now = Date.now()
    if (!options) options = {}
    if (options.leading === false && !old) {
      old = now
    }

    if (now - old > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      func.apply(context, args);
      old = now
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(() => {
        old = Date.now()
        timeout = null
        func.apply(context, args);

      }, wait);
    }
  }
}