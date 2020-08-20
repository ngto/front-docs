function debounce (func, wait, immediate) {
  let timeout, context, args, result;

  let debounced = function () {
    context = this;
    args = arguments;

    if (timeout) clearTimeout(timeout)

    if (immediate) {
      let callNow = !timeout
      setTimeout(() => {
        timeout = null
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        result = func.apply(context, args);
      }, wait);
    }
    return result
  }

  debounced.cancel = function () {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced

}