function fibonacciSequence(num) {
    let output = []
    var n1 = 0
    var n2 = 1
    var nextNumberInSequence
    
    output.push(n1)
    
    for (let i = 2; i <= num; i++) {
        if(i === 2) {
            output.push(n2)
        } else {
        
        nextNumberInSequence = n1 + n2
        n1 = n2
        n2 = nextNumberInSequence
        
        output.push(nextNumberInSequence)
        }
        
    }
    return output
}


module.exports = fibonacciSequence
