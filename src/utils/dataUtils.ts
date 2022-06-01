export function assignSame(target, source) {
  Object.keys(target).forEach(key1 => target[key1] = source[key1] || target[key1])
}
