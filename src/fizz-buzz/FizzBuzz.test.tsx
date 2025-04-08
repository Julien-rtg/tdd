import { getFizzBuzzValue } from './FizzBuzz'

describe('getFizzBuzzValue', () => {
    it('should return the number as string if not divisible by 3 or 5', () => {
        expect(getFizzBuzzValue(1)).toBe('1')
        expect(getFizzBuzzValue(2)).toBe('2')
        expect(getFizzBuzzValue(4)).toBe('4')
        expect(getFizzBuzzValue(7)).toBe('7')
    })

    it("should return Fizz if divisible by 3 but not by 5", () => {
        expect(getFizzBuzzValue(3)).toBe('Fizz')
        expect(getFizzBuzzValue(6)).toBe('Fizz')
        expect(getFizzBuzzValue(9)).toBe('Fizz')
        expect(getFizzBuzzValue(12)).toBe('Fizz')
    })

    it("should return Buzz if divisible by 5 but not by 3", () => {
        expect(getFizzBuzzValue(5)).toBe('Buzz')
        expect(getFizzBuzzValue(10)).toBe('Buzz')
        expect(getFizzBuzzValue(20)).toBe('Buzz')
        expect(getFizzBuzzValue(25)).toBe('Buzz')
    })

    it("should return FizzBuzz if divisible by both 3 and 5", () => {
        expect(getFizzBuzzValue(15)).toBe('FizzBuzz')
        expect(getFizzBuzzValue(30)).toBe('FizzBuzz')
        expect(getFizzBuzzValue(45)).toBe('FizzBuzz')
        expect(getFizzBuzzValue(60)).toBe('FizzBuzz')
    })

    it('should correctly handle the large number', () => {
        expect(getFizzBuzzValue(2000000001)).toBe('Fizz')
    })
})


