function divisible(num, digit) {
     return num % digit === 0
}

function inclusive(num, digit) {
    return num.toString().indexOf(digit) > -1
}


function fizzBuzz(num) {
    return divisible(num, 3) && divisible(num, 5) ? 'FizzBuzz' :
    divisible(num, 5) && inclusive(num, 3) && inclusive(num, 5) ? 'FizzBuzzBuzz' :
    inclusive(num, 3) && inclusive(num, 5) ? 'FizzBuzz' :
    divisible(num, 3) || inclusive(num, 3) ? 'Fizz' :
    divisible(num, 5) || inclusive(num, 5) ? 'Buzz' :
    num
}

for(let i=1; i <= 100; i++){
    console.log(fizzBuzz(i))
}

module.exports = fizzBuzz
