//封装自己的 工具库

//防抖动函数
export function debounce(fn, delay) {
  let timer = null;
  return function(...args) {

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  };
}