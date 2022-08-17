export function mergeN(objectArr) {
  return objectArr.reduce((acc, obj) => Object.assign(acc, obj), {});
}
