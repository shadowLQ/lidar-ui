// 相同赋值
import {h} from "vue";
import {NEllipsis} from "naive-ui";

export function assignSame(target, source) {
  Object.keys(target).forEach(key1 => target[key1] = source[key1] || target[key1])
}

export function arrDelete(arr, func) {
  // 遍历取到每个对象和对应下标，通过自定义的函数判断该对象是否删除，
  console.log("arrDelete")
  arr.forEach((item, i) => {
    if (func(item)) {
      arr.splice(i, 1)
    }
  })
}
// 替换掉指定的值
export function assignSpecify(target, source,field) {
  field.forEach(key=>target[key] = source[key])
}

export function renderLabel(option) {
  return [
    h(
      NEllipsis,
      null,
      {
        default: () => option.label
      }
    )]
}

