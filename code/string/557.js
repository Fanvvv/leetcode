export default (str) => {
  // 字符串按空格分隔
  // 对数组进行遍历，每个元素进行反转，再转换为字符串
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
