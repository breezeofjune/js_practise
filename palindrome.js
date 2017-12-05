function judge(str) {
  let i = 0, j = str.length - 1
  while (i < j) {
    if (str[i] === ' ') i++;
    if (str[j] === ' ') j--;
    if (str[i] !== str[j]) {
      return false
    }
    i++;
    j--;
  }
  return true
}


console.log(judge('madam'))
console.log(judge('nurses run'))
console.log(judge('nursesrun'))
console.log(judge('nurses rsn'))
