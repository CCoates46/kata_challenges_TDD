
function leapYear(year) {
    return year % 4 === 0 && year % 100 != 0 || year % 400 === 0 ? true:
    year % 4 === 0 && year % 100 != 0 && year % 400 != 0 ? false :
    false
}

module.exports = leapYear
