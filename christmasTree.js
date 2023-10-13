function christmasTree(height) {
    let str =[]
   

    for(let i = 1; i <= height; i++){
    str.push(' '.repeat(height-i)+'x'.repeat((i - 1) * 2 + 1)+' '.repeat(height-i))
  }
  let base = '|'

  console.log(str.length)
  console.log(str.join('\n') + '\n' + base.padStart(str.length, ' '))
  return str 
}

module.exports = christmasTree
