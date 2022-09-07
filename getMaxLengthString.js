const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === undefined || arrayOfString === null){
    return undefined
  }
  let arr = arrayOfString
  let newarr = []
  let x
  for (let i = 0; i < arr.length ; i++) {
    for (let j = i+1; j < arr.length ; j++) {
      if (arr[i].length >= arr[j].length){
        x = arr[i]
      }
    }
  }
  newarr.push(x)
  return newarr
}
module.exports = getMaxLengthString
