function fizzBuzz(num) {
    return num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' :
    num % 5 === 0 && num.toString().indexOf('3') > -1 && num.toString().indexOf('5') > -1 ? 'FizzBuzzBuzz' :
    num.toString().indexOf('3') > -1 && num.toString().indexOf('5') > -1 ? 'FizzBuzz' :
    num % 3 === 0 || num.toString().indexOf('3') > -1 ? 'Fizz' :
    num % 5 === 0 || num.toString().indexOf('5') > -1 ? 'Buzz' :
    num
}

for(let i=1; i <= 100; i++){
    console.log(fizzBuzz(i))
}

module.exports = fizzBuzz
