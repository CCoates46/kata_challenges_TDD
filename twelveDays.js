// Input
// You will create a single function where a day number is entered between
// 1 and 12 (inclusive).
// This will then print out the lines for that day.

// Output
// The output will always include the day that has been included and 
// all the gits given on that day.
// E.g if you enter '1' for the first day, then it would print the following
// verse:
// On the First day of Christmas,
// My true love gave to me,
// A partridge in a pear tree.

// And, for day 12, it will output the full lines giving the following verse: 
// On the Twelfth day of Christmas,
// My true love gave to me,
// Twelve drummers drumming,
// Eleven pipers piping,
// Ten lords-a-leaping,
// Nine ladies dancing,
// Eight maids-a-milking,
// Seven swans-a-swimming,
// Six geese a-laying,
// Five golden rings,
// four calling birds,
// Three French hens,
// Two turtle doves,
// And a partridge in a pear tree

const gifts = [
    'Partridge in a Pear Tree', 
    'Turtle Doves',
    'French Hens',
    'Calling Birds',
    'Golden Rings']
const daysInWords = [
    'First',
    'Second', 
    'Third',
    'Fourth',
    'Fifth'
]
const numbers = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five']

function twelveDays(day) {
        return day === 1 ? `On the ${daysInWords[0]} day of Christmas, \nMy true love gave to me, \nA ${gifts[0]}`
        : day === 2 ? `On the ${daysInWords[1]} day of Christmas, \nMy true love gave to me, \n${numbers[1]} ${gifts[1]}, \nAnd a ${gifts[0]}`
        : day === 3 ? `On the ${daysInWords[2]} day of Christmas, \nMy true love gave to me, \n${numbers[2]} ${gifts[2]}, \n${numbers[1]} ${gifts[1]}, \nAnd a ${gifts[0]}`
        : day === 4 ? `On the ${daysInWords[3]} day of Christmas, \nMy true love gave to me, \n${numbers[3]} ${gifts[3]}, \n${numbers[2]} ${gifts[2]}, \n${numbers[1]} ${gifts[1]}, \nAnd a ${gifts[0]}`
        : day === 5 ? `On the ${daysInWords[4]} day of Christmas, \nMy true love gave to me, \n${numbers[4]} ${gifts[4]}, \n${numbers[3]} ${gifts[3]}, \n${numbers[2]} ${gifts[2]}, \n${numbers[1]} ${gifts[1]}, \nAnd a ${gifts[0]}`
        : 'Im Here'
     }



module.exports = twelveDays
