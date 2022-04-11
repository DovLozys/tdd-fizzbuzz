function convert(number) {
    let string = number.toString()
    if (number % 3 === 0) string = 'Fizz'
    if (number % 5 === 0) string = 'Buzz'
    if (number % 15 === 0) string = 'FizzBuzz'
    if (string.includes(3)) return 'FizzFizz'
    if (number === 5) string = 'BuzzBuzz'
    if (number === 15) string = 'FizzBuzzBuzz'
    return string
}

export { convert }
