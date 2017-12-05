function reverse (num) {
  let reversed = 0
  while (num > 0) {
    reversed = reversed * 10 + num % 10
    num = parseInt(num / 10)
  }
  reversed += num
  return reversed
}


console.log(reverse(32243))
