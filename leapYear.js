// Implement a method that checks if a year is a leap year
// All the following rules must be satisfied:
// 1. A year is not a leap year if not divisible by 4
// 2. A year is a leap year if divisible by 4
// 3. A year is a leap year if divisible by 400
// 4. A year is not a leap year if divisible by 100 but not by 400
// Examples: 1997 is not a leap year(not divisible by 400)
// 1996 is a leap year (divisible by 4)
// 1600 is a leap year (divisible by 400)
// 1800 is not a leap year (divisible by 4, divisible by 100, but NOT divisible by 400)
// The method should return true if a leap year and false if it is NOT a leap year

function leapYear(year) {
    return year % 4 === 0 && year % 100 != 0 && year % 400 === 0 ? true:
    year % 4 === 0 && year % 400 === 0 ? true :
    year % 4 === 0 && year % 100 != 0 ? true :
    year % 4 === 0 && year % 100 != 0 && year % 400 != 0 ? false :
    false
}

module.exports = leapYear
