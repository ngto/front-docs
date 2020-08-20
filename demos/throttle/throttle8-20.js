// function throttle (func, wait) {
//   let old = 0, now, context, args;
//   return function () {
//     context = this;
//     args = arguments;
//     now = Date.now()
//     if (now - old > wait) {
//       func.apply(context, args);
//       olb = now
//     }
//   }
// }

// function throttle (func, wait) {
//   let timeout, context, args;
//   return function () {
//     context = this;
//     args = arguments;
//     if (timeout) return;

//     timeout = setTimeout(() => {
//       func.apply(context, args);
//       timeout = null
//     }, wait);
//   }
// }

function throttle (func, wait, leading, trailing) {
  let old = 0, now, timeout, context, args;

  return function () {
    context = this;
    args = arguments;
    now = Date.now()
    if (leading === false && !old) {
      old = now
    }

    if (now - old > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null
      }
      func.apply(context, args);
      old = now
    } else if (trailing !== false && !timeout) {
      timeout = setTimeout(() => {
        func.apply(context, args);
        old = Date.now()
        timeout = null
      }, wait);
    }

  }

}