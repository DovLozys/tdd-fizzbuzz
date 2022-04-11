import { describe, expect, test } from 'vitest'
import { convert } from './index.js'

describe('FizBuzz should', () => {
    test('convert 3 to "FizzFizz"', () => {
        expect(convert(3)).toBe('FizzFizz')
    })
    test('convert 30 to "FizzBuzzFizz"', () => {
        expect(convert(30)).toBe('FizzBuzzFizz')
    })
    test('convert 5 to "BuzzBuzz"', () => {
        expect(convert(5)).toBe('BuzzBuzz')
    })
    test('convert 15 to "FizzBuzzBuzz"', () => {
        expect(convert(15)).toBe('FizzBuzzBuzz')
    })
    test.each([
        [1, '1'],
        [2, '2'],
        [4, '4']
    ])('convert %i to "%i"', (input, result) => {
        expect(convert(input)).toBe(result)
    })

    test.each([
        [18, 'Fizz'],
        [6, 'Fizz'],
        [12, 'Fizz']
    ])('convert %i to "%s"', (input, result) => {
        expect(convert(input)).toBe(result)
    })

    test.each([
        [40, 'Buzz'],
        [10, 'Buzz'],
        [20, 'Buzz']
    ])('convert %i to "%s"', (input, result) => {
        expect(convert(input)).toBe(result)
    })

    test.each([
        [90, 'FizzBuzz'],
        [120, 'FizzBuzz'],
        [60, 'FizzBuzz']
    ])('convert %i to "%s"', (input, result) => {
        expect(convert(input)).toBe(result)
    })
})
