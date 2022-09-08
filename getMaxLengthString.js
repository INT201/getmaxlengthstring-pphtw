const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === undefined || arrayOfString === null){
    return undefined
  }
  let maxl = 0
  let arr = []

  for (let i=0 ; i < arrayOfString.length ; i++) {
    if (arrayOfString[i].length > maxl) {
      maxl = arrayOfString[i].length
    }
  }

  for (let i=0 ; i < arrayOfString.length ; i++) {
    if (arrayOfString[i].length == maxl) {
      arr.push(arrayOfString[i])
    }
  }

  return arr
}
module.exports = getMaxLengthString
