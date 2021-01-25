export default (str) => {
  // 建立数据结构，堆栈
  let arr = []
  let match = (str) => {
    let j = str.match(/^0+|1+/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for (let i = 0, len = str.length - i; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      arr.push(sub)
    }
  }
  return arr
}
